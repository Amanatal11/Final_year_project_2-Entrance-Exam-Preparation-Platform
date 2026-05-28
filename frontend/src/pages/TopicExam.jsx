import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Award, Save } from 'lucide-react';
import api from '../services/api';
import { searchExamQuestions, validateExamAnswer } from '../services/exam';
import { addBookmark, getBookmarks, removeBookmark } from '../services/engagement';
import { normalizeExamQuestionStem } from '../utils/examQuestionDisplay';
import { gradeKeyFromValue } from '../utils/grade';
import ExamQuestionCard from '../components/exam/ExamQuestionCard';

const buildEntranceExamsLink = ({ isStudent, subject, chapter, topic }) => {
  const base = isStudent ? '/curriculum/exams' : '/teacher/exams';
  const params = new URLSearchParams();
  const gradeKey = gradeKeyFromValue(subject?.gradeLevel);
  if (gradeKey) params.set('gradeLevel', gradeKey);
  if (subject?._id) params.set('subjectId', subject._id);
  if (chapter?._id) params.set('chapterId', chapter._id);
  if (topic?._id) params.set('topicId', topic._id);
  const query = params.toString();
  return query ? `${base}?${query}` : base;
};

const TopicExam = () => {
  const { topic, chapter, subject, isStudent } = useOutletContext();
  const [examQuestions, setExamQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [editingId, setEditingId] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [examSelectedAnswers, setExamSelectedAnswers] = useState({});
  const [examFeedback, setExamFeedback] = useState({});
  const [checkingExamQuestionId, setCheckingExamQuestionId] = useState(null);

  const [newQuestion, setNewQuestion] = useState({
    year: '2017',
    tag: '',
    questionText: '',
    choices: ['', '', '', ''],
    correctAnswer: 'A',
    answerExplanation: ''
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const fetchExamQuestions = async () => {
    try {
      setLoading(true);
      const res = await searchExamQuestions({ topicId: topic._id, limit: 200 });
      setExamQuestions(res?.data || []);
    } catch (err) {
      console.error('Failed to fetch exam data', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookmarks = async () => {
    if (!isStudent) return;
    try {
      const response = await getBookmarks();
      setBookmarks(response?.data || []);
    } catch (err) {
      console.error('Failed to fetch bookmarks', err);
    }
  };

  useEffect(() => {
    if (topic?._id) {
      fetchExamQuestions();
      fetchBookmarks();
    }
  }, [topic?._id, isStudent]);

  const getExamQuestionBookmark = (questionId) => bookmarks.find((bookmark) => (
    bookmark.resourceType === 'exam-question' && String(bookmark.resourceId) === String(questionId)
  ));

  const handleToggleExamBookmark = async (questionId) => {
    try {
      const existing = getExamQuestionBookmark(questionId);
      if (existing) {
        await removeBookmark(existing._id);
        setBookmarks((prev) => prev.filter((bookmark) => bookmark._id !== existing._id));
        showToast('University entrance exam question removed from bookmarks.');
      } else {
        const note = window.prompt('Add a note for this bookmark (optional):', '') || '';
        const response = await addBookmark({ resourceType: 'exam-question', resourceId: questionId, note });
        setBookmarks((prev) => [response.data, ...prev]);
        showToast('Entrance exam question bookmarked.');
      }
    } catch (err) {
      showToast(err.response?.data?.message || 'Failed to update bookmark.', 'error');
    }
  };

  const handleEdit = (q) => {
    setEditingId(q._id);
    setNewQuestion({
      year: q.examPaperDoc?.year?.toString() || '2017',
      tag: q.tag || '',
      questionText: normalizeExamQuestionStem(q.questionText),
      choices: q.choices || ['', '', '', ''],
      correctAnswer: q.correctAnswer || 'A',
      answerExplanation: q.answerExplanation || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setNewQuestion({
      year: '2017',
      tag: '',
      questionText: '',
      choices: ['', '', '', ''],
      correctAnswer: 'A',
      answerExplanation: ''
    });
  };

  const handleSaveQuestion = async () => {
    if (!newQuestion.questionText.trim()) {
      return showToast('Question statement is required.', 'error');
    }
    if (newQuestion.choices.some(opt => !opt.trim())) {
      return showToast('All four options must be filled.', 'error');
    }

    setIsSaving(true);
    try {
      let paperId = null;

      // 1. Find or Create Exam Paper for the selected year
      const papersRes = await api.get(`/exams/papers/subjects/${subject._id}`);
      const papers = papersRes.data?.data || papersRes.data || [];
      const existingPaper = papers.find(p => p.year === parseInt(newQuestion.year));

      if (existingPaper) {
        paperId = existingPaper._id;
      } else {
        const newPaperRes = await api.post('/exams/papers', {
          subject: subject._id,
          year: parseInt(newQuestion.year),
          title: 'University Entrance Exam',
        });
        paperId = newPaperRes.data.data._id;
      }

      // 2. Add or Update Question
      if (editingId) {
        await api.put(`/exams/questions/${editingId}`, {
          ...newQuestion,
          examPaper: paperId,
          topic: topic._id,
          questionText: newQuestion.questionText.trim(),
          choices: newQuestion.choices.map(c => c.trim()),
          tag: newQuestion.tag.trim()
        });
        showToast('University entrance exam question updated.');
      } else {
        await api.post(`/exams/papers/${paperId}/questions`, {
          ...newQuestion,
          topic: topic._id,
          questionText: newQuestion.questionText.trim(),
          choices: newQuestion.choices.map(c => c.trim()),
          tag: newQuestion.tag.trim()
        });
        showToast('University entrance exam question added.');
      }

      handleCancelEdit();
      fetchExamQuestions();
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to process exam question.';
      showToast(msg, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Remove this national exam reference? This will affect student revision history.')) return;
    try {
      await api.delete(`/exams/questions/${id}`);
      showToast('University entrance exam question removed.');
      if (editingId === id) handleCancelEdit();
      fetchExamQuestions();
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to remove exam link.';
      showToast(msg, 'error');
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

  return (
    <div className="py-4 sm:py-6 space-y-6 sm:space-y-10 animate-in slide-in-from-bottom-4 duration-500 w-full min-w-0 overflow-x-hidden">
      {toast.show && (
        <div className={`fixed bottom-4 inset-x-4 sm:inset-x-auto sm:left-auto sm:right-4 z-[100] max-w-[min(100%,calc(100vw-2rem))] sm:max-w-sm px-4 py-3 rounded-xl shadow-lg border mb-[env(safe-area-inset-bottom,0)] ${toast.type === 'error' ? 'bg-error/10 border-error/20 text-error' : 'bg-primary-container/10 border-primary-container/20 text-primary-container'}`}>
          <p className="font-bold text-sm sm:text-base break-words">{toast.message}</p>
        </div>
      )}

      {/* Exam Linkage Builder */}
      {!isStudent && (
        <div className="bg-white p-4 sm:p-8 md:p-10 rounded-xl border border-outline-variant shadow-[0px_8px_24px_rgba(0,0,0,0.08)] min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-10">
          <div className="min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-on-surface break-words">{editingId ? 'Edit question' : 'University entrance exam questions'}</h3>
            <p className="text-on-surface-variant/60 text-sm font-medium mt-1">Link multiple-choice items to this topic and a paper year for records.</p>
          </div>
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-container/5 rounded-xl flex items-center justify-center text-primary-container border border-primary-container/10 shrink-0">
            <Award size={28} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Exam Year</label>
                  <select 
                    value={newQuestion.year} 
                    onChange={e => setNewQuestion({...newQuestion, year: e.target.value})} 
                    className="w-full bg-white border border-outline/20 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-on-surface focus:border-primary-container outline-none shadow-sm appearance-none"
                  >
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Topic Tag</label>
                  <input 
                    value={newQuestion.tag} 
                    onChange={e => setNewQuestion({...newQuestion, tag: e.target.value})} 
                    placeholder="e.g. Vectors" 
                    className="w-full bg-white border border-outline/20 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-on-surface focus:border-primary-container outline-none shadow-sm" 
                  />
               </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Question stem</label>
              <p className="text-xs text-on-surface-variant/80 ml-1">Write the full multiple-choice prompt only. Do not repeat the calendar year here — it is set by <strong className="text-on-surface">Exam year</strong> above.</p>
              <textarea 
                value={newQuestion.questionText} 
                onChange={e => setNewQuestion({...newQuestion, questionText: e.target.value})} 
                placeholder="Example: What is the value of 2⁻¹ + 4⁻¹ ?"
                className="w-full bg-white border border-outline/20 px-6 py-4 rounded-xl font-semibold text-base text-on-surface resize-none focus:border-primary-container outline-none transition-all shadow-sm" 
                rows="4"
              />
            </div>
          </div>

          <div className="space-y-6">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Options & Correct Answer</label>
            <div className="grid grid-cols-1 gap-3">
              {['A', 'B', 'C', 'D'].map((opt, i) => (
                <div key={opt} className="flex items-center gap-2 sm:gap-4 min-w-0">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg flex items-center justify-center font-black text-xs border transition-all ${newQuestion.correctAnswer === opt ? 'bg-primary-container text-white border-primary-container shadow-md' : 'bg-surface text-outline border-outline/10'}`}>
                    {opt}
                  </div>
                  <input 
                    value={newQuestion.choices[i]} 
                    onChange={e => {
                      const opts = [...newQuestion.choices];
                      opts[i] = e.target.value;
                      setNewQuestion({...newQuestion, choices: opts});
                    }} 
                    placeholder={`Option ${opt}`} 
                    className={`min-w-0 flex-1 bg-white border px-3 sm:px-5 py-3 rounded-xl font-semibold text-sm outline-none transition-all shadow-sm ${newQuestion.correctAnswer === opt ? 'border-primary-container ring-1 ring-primary-container/20' : 'border-outline/20 focus:border-primary-container/40'}`} 
                  />
                  <input 
                    type="radio" 
                    name="correctAnswer" 
                    checked={newQuestion.correctAnswer === opt} 
                    onChange={() => setNewQuestion({...newQuestion, correctAnswer: opt})} 
                    className="w-5 h-5 shrink-0 accent-primary-container cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col-reverse sm:flex-row sm:justify-end border-t border-outline/5 pt-6 sm:pt-8 gap-3 sm:gap-4">
           {editingId && (
             <button 
               onClick={handleCancelEdit} 
               className="w-full sm:w-auto bg-white border border-outline/20 text-on-surface px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-surface transition-all shadow-sm min-h-11"
             >
               Cancel
             </button>
           )}
           <button 
             onClick={handleSaveQuestion} 
             disabled={isSaving || !newQuestion.questionText} 
             className={`w-full sm:w-auto ${editingId ? 'bg-primary-container' : 'bg-on-surface'} text-white px-8 sm:px-12 py-3.5 sm:py-5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:brightness-110 active:opacity-80 transition-all shadow-xl shadow-on-surface/10 disabled:opacity-50 flex items-center justify-center gap-3 min-h-11`}
           >
             <Save size={20} /> {isSaving ? 'Processing...' : (editingId ? 'Update Reference' : 'Publish Reference')}
           </button>
        </div>
      </div>
      )}

      {/* Associated Exam Questions */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-2">
          <h4 className="text-sm font-bold text-on-surface-variant tracking-tight">
            Exam questions · {examQuestions.length} {examQuestions.length === 1 ? 'item' : 'items'}
          </h4>
          <div className="flex flex-col sm:items-end gap-2">
            <Link
              to={buildEntranceExamsLink({ isStudent, subject, chapter, topic })}
              className="text-xs font-bold text-primary-container hover:underline"
            >
              View in Entrance Exams
            </Link>
            {isStudent && examQuestions.length > 0 && (
              <p className="text-xs text-on-surface-variant font-semibold">
                Select an option, then press{' '}
                <span className="text-on-surface">Check answer</span>. After a wrong try, change your choice and check again.
              </p>
            )}
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center py-20 bg-white rounded-xl border border-outline/5"><div className="w-10 h-10 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div></div>
        ) : examQuestions.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {examQuestions.map((q, i) => (
              <ExamQuestionCard
                key={q._id}
                question={q}
                index={i}
                isStudent={isStudent}
                feedback={examFeedback[q._id]}
                selectedAnswer={examSelectedAnswers[q._id]}
                checkingQuestionId={checkingExamQuestionId}
                onSelectAnswer={(id, letter) => setExamSelectedAnswers((prev) => ({ ...prev, [id]: letter }))}
                onConfirmAnswer={handleConfirmExamAnswer}
                onToggleBookmark={isStudent ? handleToggleExamBookmark : undefined}
                isBookmarked={Boolean(getExamQuestionBookmark(q._id))}
                onEdit={!isStudent ? handleEdit : undefined}
                onDelete={!isStudent ? handleDelete : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="bg-surface/50 border border-dashed border-outline/20 rounded-xl py-32 text-center opacity-40">
            <Award size={64} className="mx-auto mb-4 text-outline" />
            <p className="text-lg font-bold uppercase tracking-widest text-on-surface-variant">No university entrance exam questions linked yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicExam;
