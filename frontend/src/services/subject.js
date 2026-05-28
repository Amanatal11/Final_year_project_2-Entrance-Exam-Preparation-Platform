import api from './api';

export const updateSubject = async (id, data) => {
  const response = await api.put(`/subjects/${id}`, data);
  return response.data;
};

export const getSubjects = async () => {
  const response = await api.get('/subjects');
  const payload = response.data;
  return Array.isArray(payload) ? payload : (payload?.data || []);
};

export const deleteSubject = async (id) => {
  const response = await api.delete(`/subjects/${id}`);
  return response.data;
};
