/**
 * Grade 11 Chemistry — MoE-style Natural stream (six units).
 */

const u13 = require('./grade11ChemistryUnits1to3');
const u46 = require('./grade11ChemistryUnits4to6');

module.exports = {
  gradeLevel: '11',
  subjectName: 'Chemistry',
  stream: 'Natural',
  subjectDescription:
    'Grade 11 Chemistry (Natural stream): fundamental concepts and measurement; atomic structure and periodicity; bonding and crystal structure; kinetics; equilibrium and phase behavior; carboxylic acids, esters, fats, and oils.',

  chapters: [...u13, ...u46],
};
