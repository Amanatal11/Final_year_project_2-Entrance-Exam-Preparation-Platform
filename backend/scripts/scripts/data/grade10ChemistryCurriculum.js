/**
 * Grade 10 Chemistry — MoE-style Natural stream (six units).
 */

const u13 = require('./grade10ChemistryUnits1to3');
const u46 = require('./grade10ChemistryUnits4to6');

module.exports = {
  gradeLevel: '10',
  subjectName: 'Chemistry',
  stream: 'Natural',
  subjectDescription:
    'Grade 10 Chemistry (Natural stream): stoichiometry and reactions; solutions; inorganic compounds; energetics and electrochemistry; metals and nonmetals; hydrocarbons and natural sources.',

  chapters: [...u13, ...u46],
};
