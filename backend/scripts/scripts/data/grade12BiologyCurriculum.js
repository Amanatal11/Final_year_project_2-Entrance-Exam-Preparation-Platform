/**
 * Grade 12 Biology — curriculum pointer (Natural stream, MoE Ethiopia–style six units).
 */

const u13 = require('./grade12BiologyUnits1to3');
const u46 = require('./grade12BiologyUnits4to6');

module.exports = {
  gradeLevel: '12',
  subjectName: 'Biology',
  stream: 'Natural',
  subjectDescription:
    'Grade 12 Biology (Natural stream): evolution and speciation; population and community ecology; ecosystems and biogeochemical cycles; plant structure and reproduction; microbiology and public health; biotechnology, conservation, and sustainable development.',

  chapters: [...u13, ...u46],
};
