/**
 * Grade 10 Physics — MoE-style Natural stream (six units).
 */

const u13 = require('./grade10PhysicsUnits1to3');
const u46 = require('./grade10PhysicsUnits4to6');

module.exports = {
  gradeLevel: '10',
  subjectName: 'Physics',
  stream: 'Natural',
  subjectDescription:
    'Grade 10 Physics (Natural stream): vectors, uniformly accelerated motion, elasticity and equilibrium, electricity, magnetism, and electromagnetic waves with geometrical optics.',

  chapters: [...u13, ...u46],
};
