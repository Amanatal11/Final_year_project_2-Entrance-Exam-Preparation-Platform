import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Award, Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ExamQuestionCard from '../components/exam/ExamQuestionCard';
import { getSubjects } from '../services/subject';
import { getChaptersBySubject, getTopicsByChapter } from '../services/chapter';
import api from '../services/api';
import {
  searchExamQuestions,
  validateExamAnswer,
  getExamPapersBySubject,
  DEFAULT_EXAM_YEARS,
} from '../services/exam';
import { addBookmark, getBookmarks, removeBookmark } from '../services/engagement';
import { formatTopicTitleDisplay } from '../utils/formatTopicDisplayText';

const ExamQuestionBank = ({ isStudent = false }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [topics, setTopics] = useState([]);
  const [yearOptions, setYearOptions] = useState(DEFAULT_EXAM_YEARS);

  const [subjectId, setSubjectId] = useState(searchParams.get('subjectId') || '');
  const [chapterId, setChapterId] = useState(searchParams.get('chapterId') || '');
  const [topicId, setTopicId] = useState(searchParams.get('topicId') || '');
  const [year, setYear] = useState(searchParams.get('year') || '');
  const [textQuery, setTextQuery] = useState(searchParams.get('q') || '');
  const [debouncedQuery, setDebouncedQuery] = useState(searchParams.get('q') || '');
  const [page, setPage] = useState(Math.max(parseInt(searchParams.get('page') || '1', 10), 1));

  const [questions, setQuestions] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [bookmarks, setBookmarks] = useState([]);
  const [examSelectedAnswers, setExamSelectedAnswers] = useState({});
  const [examFeedback, setExamFeedback] = useState({});
  const [checkingExamQuestionId, setCheckingExamQuestionId] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(textQuery.trim()), 350);
    return () => clearTimeout(timer);
  }, [textQuery]);

  useEffect(() => {
    getSubjects()
      .then((res) => setSubjects(res?.data || []))
      .catch(() => setSubjects([]));
  }, []);

  useEffect(() => {
    const urlTopicId = searchParams.get('topicId');
    const urlChapterId = searchParams.get('chapterId');
    const urlSubjectId = searchParams.get('subjectId');
    if (!urlTopicId || urlChapterId) return;

    const hydrateFromTopic = async () => {
      try {
        const res = await api.get(`/content/topics/${urlTopicId}`);
        const topicData = res.data?.data || res.data;
        if (!topicData?.chapter) return;

        const chapterRes = await api.get(`/content/chapters/${topicData.chapter}`);
        const chapterData = chapterRes.data?.data || chapterRes.data;
        if (!chapterData) return;

        if (!urlSubjectId && chapterData.subject) {
          setSubjectId(String(chapterData.subject));
        }
        setChapterId(String(chapterData._id));
        setTopicId(String(urlTopicId));
      } catch (_err) {
        /* non-blocking */
      }
    };

    hydrateFromTopic();
  }, [searchParams]);

  useEffect(() => {
    if (!subjectId) {
      setChapters([]);
      return;
    }
    getChaptersBySubject(subjectId)
      .then((res) => setChapters(res?.data || []))
      .catch(() => setChapters([]));
  }, [subjectId]);

  useEffect(() => {
    if (!chapterId) {
      setTopics([]);
      return;
    }
    getTopicsByChapter(chapterId)
      .then((res) => setTopics(res?.data || []))
      .catch(() => setTopics([]));
  }, [chapterId]);

  useEffect(() => {
    if (!subjectId) {
      setYearOptions(DEFAULT_EXAM_YEARS);
      return;
    }
    getExamPapersBySubject(subjectId)
      .then((res) => {
        const papers = res?.data || [];
        const years = [...new Set(papers.map((p) => String(p.year)).filter(Boolean))].sort();
        setYearOptions(years.length > 0 ? years : DEFAULT_EXAM_YEARS);
      })
      .catch(() => setYearOptions(DEFAULT_EXAM_YEARS));
  }, [subjectId]);

  useEffect(() => {
    const params = {};
    if (subjectId) params.subjectId = subjectId;
    if (chapterId) params.chapterId = chapterId;
    if (topicId) params.topicId = topicId;
    if (year) params.year = year;
    if (debouncedQuery) params.q = debouncedQuery;
    if (page > 1) params.page = String(page);
    setSearchParams(params, { replace: true });
  }, [subjectId, chapterId, topicId, year, debouncedQuery, page, setSearchParams]);

  useEffect(() => {
    if (isStudent) {
      getBookmarks()
        .then((res) => setBookmarks(res?.data || []))
        .catch(() => setBookmarks([]));
    }
  }, [isStudent]);

  const hasActiveFilter = Boolean(subjectId || chapterId || topicId || year || debouncedQuery);

  useEffect(() => {
    if (!hasActiveFilter) {
      setQuestions([]);
      setTotal(0);
      setPages(1);
      setError('');
      return;
    }

    const fetchQuestions = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await searchExamQuestions({
          subjectId: subjectId || undefined,
          chapterId: chapterId || undefined,
          topicId: topicId || undefined,
          year: year || undefined,
          q: debouncedQuery || undefined,
          page,
          limit: 20,
        });
        setQuestions(res?.data || []);
        setTotal(res?.total ?? 0);
        setPages(res?.pages ?? 1);
      } catch (err) {
        setQuestions([]);
        setTotal(0);
        setPages(1);
        setError(err.response?.data?.message || 'Failed to load exam questions.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [subjectId, chapterId, topicId, year, debouncedQuery, page, hasActiveFilter]);

  const selectedSubject = subjects.find((s) => s._id === subjectId);
  const selectedChapter = chapters.find((c) => c._id === chapterId);
  const selectedTopic = topics.find((t) => t._id === topicId);

  const getTopicName = (q) => {
    if (selectedTopic && String(q.topic) === String(selectedTopic._id)) {
      return formatTopicTitleDisplay(selectedTopic.topicName);
    }
    const fromList = topics.find((t) => String(t._id) === String(q.topic));
    if (fromList) return formatTopicTitleDisplay(fromList.topicName);
    if (q.topicDoc?.topicName) return formatTopicTitleDisplay(q.topicDoc.topicName);
    return null;
  };

  const getExamQuestionBookmark = (questionId) => bookmarks.find((bookmark) => (
    bookmark.resourceType === 'exam-question' && String(bookmark.resourceId) === String(questionId)
  ));

  const handleToggleExamBookmark = async (questionId) => {
    try {
      const existing = getExamQuestionBookmark(questionId);
      if (existing) {
        await removeBookmark(existing._id);
        setBookmarks((prev) => prev.filter((bookmark) => bookmark._id !== existing._id));
        showToast('Exam question removed from bookmarks.');
      } else {
        const note = window.prompt('Add a note for this bookmark (optional):', '') || '';
        const response = await addBookmark({ resourceType: 'exam-question', resourceId: questionId, note });
        setBookmarks((prev) => [response.data, ...prev]);
        showToast('Exam question bookmarked.');
      }
    } catch (err) {
      showToast(err.response?.data?.message || 'Failed to update bookmark.', 'error');
    }
  };

  const handleConfirmExamAnswer = async (q) => {
    const id = q._id;
    const selectedLetter = examSelectedAnswers[id];
    if (!isStudent || !selectedLetter) return;

    const prevFb = examFeedback[id];
    if (prevFb?.isCorrect) return;
    if (prevFb && !prevFb.isCorrect && prevFb.attemptedSelection === selectedLetter) return;

    try {
      setCheckingExamQuestionId(id);
      const data = await validateExamAnswer(id, selectedLetter);
      setExamFeedback((prev) => ({
        ...prev,
        [id]: {
          isCorrect: Boolean(data?.isCorrect),
          correctAnswer: data?.correctAnswer,
          answerExplanation: data?.answerExplanation,
          attemptedSelection: selectedLetter,
        },
      }));
    } catch (err) {
      showToast(err.response?.data?.message || 'Failed to check answer.', 'error');
    } finally {
      setCheckingExamQuestionId(null);
    }
  };

  const handleSubjectChange = (value) => {
    setSubjectId(value);
    setChapterId('');
    setTopicId('');
    setPage(1);
  };

  const handleChapterChange = (value) => {
    setChapterId(value);
    setTopicId('');
    setPage(1);
  };

  const handleTopicChange = (value) => {
    setTopicId(value);
    setPage(1);
  };

  const handleYearChange = (value) => {
    setYear(value);
    setPage(1);
  };

  const clearFilters = () => {
    setSubjectId('');
    setChapterId('');
    setTopicId('');
    setYear('');
    setTextQuery('');
    setDebouncedQuery('');
    setPage(1);
    setExamSelectedAnswers({});
    setExamFeedback({});
  };

  const buildContextChips = (q) => {
    const chips = [];
    if (selectedSubject?.subjectName) chips.push(selectedSubject.subjectName);
    if (selectedChapter?.chapterName) chips.push(selectedChapter.chapterName);
    const topicName = getTopicName(q);
    if (topicName) chips.push(topicName);
    return chips;
  };

  return (
    <div className="py-4 sm:py-6 space-y-6 sm:space-y-8 animate-in slide-in-from-bottom-4 duration-500 w-full min-w-0">
      {toast.show && (
        <div className={`fixed bottom-4 inset-x-4 sm:inset-x-auto sm:left-auto sm:right-4 z-[100] max-w-[min(100%,calc(100vw-2rem))] sm:max-w-sm px-4 py-3 rounded-xl shadow-lg border mb-[env(safe-area-inset-bottom,0)] ${toast.type === 'error' ? 'bg-error/10 border-error/20 text-error' : 'bg-primary-container/10 border-primary-container/20 text-primary-container'}`}>
          <p className="font-bold text-sm sm:text-base break-words">{toast.message}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-on-surface">Previous Year Exams</h1>
          <p className="text-sm text-on-surface-variant mt-1">FR-07 — Search and filter national entrance exam questions by subject, chapter, topic, and year.</p>
        </div>
        <div className="w-12 h-12 bg-primary-container/5 rounded-xl flex items-center justify-center text-primary-container border border-primary-container/10 shrink-0">
          <Award size={28} />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-outline-variant p-4 sm:p-6 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label htmlFor="exam-bank-subject" className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Subject</label>
            <select
              id="exam-bank-subject"
              value={subjectId}
              onChange={(e) => handleSubjectChange(e.target.value)}
              className="w-full bg-white border border-outline/20 px-4 py-3 rounded-xl font-semibold text-sm text-on-surface focus:border-primary-container outline-none"
            >
              <option value="">All subjects</option>
              {subjects.map((s) => (
                <option key={s._id} value={s._id}>{s.subjectName}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="exam-bank-chapter" className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Chapter</label>
            <select
              id="exam-bank-chapter"
              value={chapterId}
              onChange={(e) => handleChapterChange(e.target.value)}
              disabled={!subjectId}
              className="w-full bg-white border border-outline/20 px-4 py-3 rounded-xl font-semibold text-sm text-on-surface focus:border-primary-container outline-none disabled:opacity-50"
            >
              <option value="">All chapters</option>
              {chapters.map((c) => (
                <option key={c._id} value={c._id}>{c.chapterName}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="exam-bank-topic" className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Topic</label>
            <select
              id="exam-bank-topic"
              value={topicId}
              onChange={(e) => handleTopicChange(e.target.value)}
              disabled={!chapterId}
              className="w-full bg-white border border-outline/20 px-4 py-3 rounded-xl font-semibold text-sm text-on-surface focus:border-primary-container outline-none disabled:opacity-50"
            >
              <option value="">All topics</option>
              {topics.map((t) => (
                <option key={t._id} value={t._id}>{formatTopicTitleDisplay(t.topicName)}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="exam-bank-year" className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Exam year</label>
            <select
              id="exam-bank-year"
              value={year}
              onChange={(e) => handleYearChange(e.target.value)}
              className="w-full bg-white border border-outline/20 px-4 py-3 rounded-xl font-semibold text-sm text-on-surface focus:border-primary-container outline-none"
            >
              <option value="">All years</option>
              {yearOptions.map((y) => (
                <option key={y} value={y}>{y} E.C.</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
          <div className="flex-1 space-y-2">
            <label htmlFor="exam-bank-search" className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Search question text</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" size={16} />
              <input
                id="exam-bank-search"
                value={textQuery}
                onChange={(e) => { setTextQuery(e.target.value); setPage(1); }}
                placeholder="Search by question stem..."
                className="w-full bg-white border border-outline/20 pl-9 pr-3 py-3 rounded-xl font-semibold text-sm text-on-surface focus:border-primary-container outline-none"
              />
            </div>
          </div>
          {hasActiveFilter && (
            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-outline/20 text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:bg-surface transition-colors shrink-0"
            >
              <X size={16} />
              Clear filters
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-1">
        <h2 className="text-sm font-bold text-on-surface-variant">
          {hasActiveFilter
            ? `${total} ${total === 1 ? 'question' : 'questions'} found`
            : 'Select at least one filter to browse exam questions'}
        </h2>
        {isStudent && questions.length > 0 && (
          <p className="text-xs text-on-surface-variant font-semibold">
            Select an option, then press <span className="text-on-surface">Check answer</span>.
          </p>
        )}
      </div>

      {error && (
        <div className="bg-error/5 border border-error/20 text-error rounded-xl px-4 py-3 text-sm font-semibold">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-20 bg-white rounded-xl border border-outline/5">
          <div className="w-10 h-10 border-4 border-primary-container border-t-transparent rounded-full animate-spin" />
        </div>
      ) : !hasActiveFilter ? (
        <div className="bg-surface/50 border border-dashed border-outline/20 rounded-xl py-24 text-center">
          <Award size={56} className="mx-auto mb-4 text-outline opacity-40" />
          <p className="text-base font-bold text-on-surface-variant">Choose a subject, chapter, topic, year, or search term to get started.</p>
        </div>
      ) : questions.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {questions.map((q, i) => (
            <ExamQuestionCard
              key={q._id}
              question={q}
              index={(page - 1) * 20 + i}
              isStudent={isStudent}
              feedback={examFeedback[q._id]}
              selectedAnswer={examSelectedAnswers[q._id]}
              checkingQuestionId={checkingExamQuestionId}
              onSelectAnswer={(id, letter) => setExamSelectedAnswers((prev) => ({ ...prev, [id]: letter }))}
              onConfirmAnswer={handleConfirmExamAnswer}
              onToggleBookmark={isStudent ? handleToggleExamBookmark : undefined}
              isBookmarked={Boolean(getExamQuestionBookmark(q._id))}
              contextChips={buildContextChips(q)}
              teacherTopicLink={!isStudent && q.topic ? `/teacher/topic/${q.topic}/exam` : undefined}
            />
          ))}
        </div>
      ) : (
        <div className="bg-surface/50 border border-dashed border-outline/20 rounded-xl py-24 text-center">
          <p className="text-base font-bold text-on-surface-variant">No exam questions match your filters.</p>
        </div>
      )}

      {hasActiveFilter && pages > 1 && (
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            type="button"
            disabled={page <= 1 || loading}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline/20 font-bold text-xs uppercase tracking-widest disabled:opacity-40 hover:bg-surface transition-colors"
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          <span className="text-sm font-semibold text-on-surface-variant tabular-nums">
            Page {page} of {pages}
          </span>
          <button
            type="button"
            disabled={page >= pages || loading}
            onClick={() => setPage((p) => Math.min(p + 1, pages))}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline/20 font-bold text-xs uppercase tracking-widest disabled:opacity-40 hover:bg-surface transition-colors"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ExamQuestionBank;
