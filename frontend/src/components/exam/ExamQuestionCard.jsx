import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Edit2, Trash2, Bookmark, ExternalLink } from 'lucide-react';
import { normalizeExamQuestionStem } from '../../utils/examQuestionDisplay';

const letterForIndex = (idx) => String.fromCharCode(65 + idx);

const ExamQuestionCard = ({
  question,
  index = 0,
  isStudent = false,
  feedback,
  selectedAnswer,
  checkingQuestionId,
  onSelectAnswer,
  onConfirmAnswer,
  onToggleBookmark,
  isBookmarked = false,
  onEdit,
  onDelete,
  contextChips = [],
  showMetadata = true,
  teacherTopicLink,
}) => {
  const hasFeedback = Boolean(feedback);
  const correctLetterStored = String(question.correctAnswer ?? 'A').trim().toUpperCase().slice(0, 1);

  return (
    <div className="bg-white rounded-xl border border-outline-variant p-4 sm:p-8 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.08)] transition-all group min-w-0">
      <div className="flex items-start justify-between gap-3 sm:gap-6 mb-6 min-w-0">
        <div className="flex gap-3 sm:gap-4 items-start min-w-0 flex-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-container/5 rounded-xl flex items-center justify-center text-primary-container border border-primary-container/10 shrink-0 group-hover:bg-primary-container group-hover:text-white transition-all text-sm sm:text-base font-bold tabular-nums">
            {index + 1}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-on-surface text-xl sm:text-2xl md:text-[1.7rem] font-normal leading-relaxed break-words">
              {normalizeExamQuestionStem(question.questionText)}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {question.examPaperDoc?.year != null ? (
                <span className="text-xs text-on-surface-variant tabular-nums font-medium">
                  {question.examPaperDoc.year} E.C.
                </span>
              ) : null}
              {showMetadata && contextChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-block px-2 py-0.5 rounded-lg bg-surface text-[9px] font-black uppercase tracking-widest border border-outline/10 text-on-surface-variant/60"
                >
                  {chip}
                </span>
              ))}
              {showMetadata && question.tag ? (
                <span className="inline-block px-2 py-0.5 rounded-lg bg-surface text-[9px] font-black uppercase tracking-widest border border-outline/10 text-on-surface-variant/60">
                  {question.tag}
                </span>
              ) : null}
            </div>
          </div>
        </div>
        {!isStudent && onEdit && onDelete && (
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all shrink-0">
            <button
              type="button"
              onClick={() => onEdit(question)}
              className="p-3 rounded-xl text-outline hover:text-primary-container hover:bg-primary-container/5 transition-all"
            >
              <Edit2 size={20} />
            </button>
            <button
              type="button"
              onClick={() => onDelete(question._id)}
              className="p-3 rounded-xl text-outline hover:text-error hover:bg-error/5 transition-all"
            >
              <Trash2 size={20} />
            </button>
          </div>
        )}
        {!isStudent && teacherTopicLink && (
          <Link
            to={teacherTopicLink}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-primary-container/20 text-primary-container text-xs font-bold uppercase tracking-widest hover:bg-primary-container/5 shrink-0"
          >
            Open in topic
            <ExternalLink size={14} />
          </Link>
        )}
        {isStudent && onToggleBookmark && (
          <button
            type="button"
            onClick={() => onToggleBookmark(question._id)}
            className={`p-3 rounded-xl border shrink-0 transition-all ${isBookmarked ? 'bg-primary-container text-white border-primary-container' : 'text-primary-container border-primary-container/20 hover:bg-primary-container/5'}`}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
          >
            <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 sm:pl-12 md:pl-14">
        {(question.choices || []).map((opt, idx) => {
          const letter = letterForIndex(idx);
          const isCorrect = letter === correctLetterStored;
          if (!isStudent) {
            const cardClass = isCorrect
              ? 'bg-emerald-500/5 border-emerald-500/20 ring-1 ring-emerald-500/10'
              : 'bg-surface/50 border-outline/5 opacity-60';
            return (
              <div key={idx} className={`p-4 sm:p-5 rounded-xl border flex items-center gap-3 sm:gap-4 min-w-0 transition-all ${cardClass}`}>
                <span className="text-xs sm:text-sm font-black uppercase text-outline w-7 sm:w-8 shrink-0 tabular-nums">{letter}</span>
                <span className={`text-base sm:text-lg font-semibold min-w-0 break-words leading-snug ${isCorrect ? 'text-emerald-700' : 'text-on-surface'}`}>{opt}</span>
                {isCorrect && <CheckCircle2 size={16} className="ml-auto text-emerald-600 shrink-0" />}
              </div>
            );
          }
          const correctFromServer = String(feedback?.correctAnswer ?? '').trim().toUpperCase().slice(0, 1);
          const correctIdx = correctFromServer ? correctFromServer.charCodeAt(0) - 65 : -1;
          return (
            <button
              key={idx}
              type="button"
              disabled={(hasFeedback && feedback.isCorrect) || checkingQuestionId === question._id}
              onClick={() => onSelectAnswer?.(question._id, letter)}
              className={`p-4 sm:p-5 rounded-xl border flex items-center gap-4 transition-all text-left min-h-[3.5rem] ${
                hasFeedback
                  ? idx === correctIdx
                    ? 'bg-emerald-500/5 border-emerald-500/20 ring-1 ring-emerald-500/10'
                    : selectedAnswer === letter
                      ? 'bg-error/5 border-error/20'
                      : 'bg-surface/50 border-outline/5 opacity-70'
                  : selectedAnswer === letter
                    ? 'bg-primary-container/5 border-primary-container/30 ring-1 ring-primary-container/10'
                    : 'bg-surface/50 border-outline/5 hover:border-primary-container/20'
              }`}
            >
              <span className="text-xs sm:text-sm font-bold uppercase text-outline w-8 shrink-0 tabular-nums">{letter}</span>
              <span
                className={`text-base sm:text-lg font-semibold leading-snug min-w-0 break-words ${
                  hasFeedback && idx === correctIdx ? 'text-emerald-700' : 'text-on-surface'
                }`}
              >
                {opt}
              </span>
              {hasFeedback && idx === correctIdx && (
                <CheckCircle2 size={16} className="ml-auto text-emerald-600 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {isStudent && !feedback?.isCorrect && (
        <div className="pl-0 sm:pl-12 md:pl-14 mt-4 flex justify-end items-center gap-3 flex-wrap">
          {checkingQuestionId === question._id && (
            <span className="text-xs text-on-surface-variant font-semibold">Checking…</span>
          )}
          <button
            type="button"
            onClick={() => onConfirmAnswer?.(question)}
            disabled={
              selectedAnswer === undefined
              || checkingQuestionId === question._id
              || Boolean(
                hasFeedback
                  && !feedback.isCorrect
                  && feedback.attemptedSelection === selectedAnswer,
              )
            }
            className="bg-primary-container text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:brightness-110 disabled:opacity-45 disabled:pointer-events-none shadow-lg shadow-primary-container/20 shrink-0"
          >
            Check answer
          </button>
        </div>
      )}

      {isStudent && hasFeedback && (
        <div className="pl-0 sm:pl-12 md:pl-14 mt-5">
          <div
            className={`rounded-xl border px-5 py-4 ${
              feedback.isCorrect
                ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-700'
                : 'bg-error/5 border-error/20 text-error'
            }`}
          >
            <p className="font-bold text-sm sm:text-base">
              {feedback.isCorrect
                ? 'Correct answer. Well done.'
                : (() => {
                    const cl = String(feedback.correctAnswer ?? '').trim().toUpperCase().slice(0, 1);
                    const ci = cl.charCodeAt(0) - 65;
                    const label = question.choices?.[ci];
                    return `Incorrect. Correct answer: ${label ? `${cl}. ${label}` : cl}`;
                  })()}
            </p>
            {!feedback.isCorrect && feedback.answerExplanation && (
              <p className="text-xs sm:text-sm mt-2 opacity-90 leading-relaxed">{feedback.answerExplanation}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamQuestionCard;
