export const GRADE_OPTIONS = [
  { key: '9', label: 'Grade 9' },
  { key: '10', label: 'Grade 10' },
  { key: '11', label: 'Grade 11' },
  { key: '12', label: 'Grade 12' },
];

/** Match seed/UI variants like "12" vs "Grade 12". */
export const gradeMatchesFilter = (subjectGrade, selectedGrade) => {
  const g = String(subjectGrade ?? '').replace(/\D/g, '');
  const s = String(selectedGrade ?? '').replace(/\D/g, '');
  if (g && s) return g === s;
  return String(subjectGrade) === String(selectedGrade);
};

export const gradeKeyFromValue = (value) => String(value ?? '').replace(/\D/g, '');
