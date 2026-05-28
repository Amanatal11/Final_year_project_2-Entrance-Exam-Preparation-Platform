/**
 * Grade 10 Biology — curriculum pointer (Natural stream).
 */

const u12 = require('./grade10BiologyUnits1to2');
const u37 = require('./grade10BiologyUnits3to7');

module.exports = {
  gradeLevel: '10',
  subjectName: 'Biology',
  stream: 'Natural',
  subjectDescription:
    'Grade 10 Biology (Natural stream): plant nutrition through ecology with human organ systems.',

  chapters: [...u12, ...u37],
};
