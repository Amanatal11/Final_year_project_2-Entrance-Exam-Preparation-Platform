/**
 * Grade 12 Chemistry — curriculum pointer (Natural stream, MoE Ethiopia–style six units).
 */

const u13 = require('./grade12ChemistryUnits1to3');
const u46 = require('./grade12ChemistryUnits4to6');

module.exports = {
  gradeLevel: '12',
  subjectName: 'Chemistry',
  stream: 'Natural',
  subjectDescription:
    'Grade 12 Chemistry (Natural stream): atomic structure and bonding; hydrocarbons and functional-group organic chemistry; energetics, kinetics, and equilibrium; acid–base and electrochemistry; and industrial, nuclear, and environmental chemistry linked to national development.',

  chapters: [...u13, ...u46],
};
