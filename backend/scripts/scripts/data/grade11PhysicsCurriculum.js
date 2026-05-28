/**
 * Grade 11 Physics — MoE Natural stream (seven units, 2023 curriculum outline).
 */

const u14 = require('./grade11PhysicsUnits1to4');
const u57 = require('./grade11PhysicsUnits5to7');

module.exports = {
  gradeLevel: '11',
  subjectName: 'Physics',
  stream: 'Natural',
  subjectDescription:
    'Grade 11 Physics (Natural stream): physics and society, vectors, motion in one and two dimensions, dynamics, heat and calorimetry, electric circuits, and nuclear physics.',

  chapters: [...u14, ...u57],
};
