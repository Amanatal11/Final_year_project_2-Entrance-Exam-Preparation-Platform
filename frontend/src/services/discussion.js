import api from './api';

export const getAllDiscussionGroups = () => api.get('/discussions');

export const getDiscussionGroupByGrade = (gradeLevel) => api.get(`/discussions/grade/${gradeLevel}`);

export const upsertDiscussionGroup = (data) => api.post('/discussions', data);

export const deleteDiscussionGroup = (id) => api.delete(`/discussions/${id}`);
