/**
 * Grade 11 Biology — curriculum pointer (Natural stream, MoE Ethiopia–style six units).
 */

const u13 = require('./grade11BiologyUnits1to3');
const u46 = require('./grade11BiologyUnits4to6');

module.exports = {
  gradeLevel: '11',
  subjectName: 'Biology',
  stream: 'Natural',
  subjectDescription:
    'Grade 11 Biology (Natural stream): biotechnology and tools; animal diversity; enzymes; genetics; integrated human physiology; populations and natural resources.',

  chapters: [...u13, ...u46],
};
