import api from './api';

const buildSearchParams = (params = {}) => {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && String(value).trim() !== '') {
      search.set(key, String(value).trim());
    }
  });
  return search.toString();
};

export const searchExamQuestions = async ({
  subjectId,
  chapterId,
  topicId,
  year,
  q,
  page = 1,
  limit = 20,
} = {}) => {
  const query = buildSearchParams({ subjectId, chapterId, topicId, year, q, page, limit });
  const response = await api.get(`/exams/questions/search?${query}`);
  return response.data;
};

export const validateExamAnswer = async (questionId, submittedAnswer) => {
  const response = await api.post(`/exams/questions/${questionId}/validate`, {
    submittedAnswer,
  });
  return response.data;
};

export const getExamPapersBySubject = async (subjectId, { page = 1, limit = 100 } = {}) => {
  const response = await api.get(
    `/exams/papers/subjects/${subjectId}?page=${page}&limit=${limit}`,
  );
  return response.data;
};

export const DEFAULT_EXAM_YEARS = ['2014', '2015', '2016', '2017', '2018'];
export const EXAM_QUESTIONS_PAGE_SIZE = 5;
