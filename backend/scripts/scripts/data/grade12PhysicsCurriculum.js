/**
 * Grade 12 Physics — MoE Natural stream (five units, 2023 curriculum outline).
 */

const u13 = require('./grade12PhysicsUnits1to3');
const u45 = require('./grade12PhysicsUnits4to5');

module.exports = {
  gradeLevel: '12',
  subjectName: 'Physics',
  stream: 'Natural',
  subjectDescription:
    'Grade 12 Physics (Natural stream): interdisciplinary applications, two-dimensional motion, fluid mechanics, electromagnetism, and basics of electronics.',

  chapters: [...u13, ...u45],
};
