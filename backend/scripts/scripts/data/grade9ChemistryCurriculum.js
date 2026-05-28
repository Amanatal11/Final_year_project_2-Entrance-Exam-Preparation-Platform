/**
 * Grade 9 Chemistry — MoE-style Natural stream (five units).
 */

const u13 = require('./grade9ChemistryUnits1to3');
const u45 = require('./grade9ChemistryUnits4to5');

module.exports = {
  gradeLevel: '9',
  subjectName: 'Chemistry',
  stream: 'Natural',
  subjectDescription:
    'Grade 9 Chemistry (Natural stream): atomic structure, periodic classification, bonding, reactions and stoichiometry, and states of matter.',

  chapters: [...u13, ...u45],
};
