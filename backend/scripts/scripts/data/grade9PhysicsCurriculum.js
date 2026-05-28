/**
 * Grade 9 Physics — MoE-style Natural stream (seven units).
 */

const u14 = require('./grade9PhysicsUnits1to4');
const u57 = require('./grade9PhysicsUnits5to7');

module.exports = {
  gradeLevel: '9',
  subjectName: 'Physics',
  stream: 'Natural',
  subjectDescription:
    'Grade 9 Physics (Natural stream): nature of physics, measurement, linear motion, forces and energy, simple machines, waves and sound, and temperature.',

  chapters: [...u14, ...u57],
};
