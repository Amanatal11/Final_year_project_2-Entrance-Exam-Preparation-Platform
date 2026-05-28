/**
 * Grade 9 Biology — MoE-style secondary units (Natural stream).
 * Chapters: see grade9BiologyUnits1to2.js and grade9BiologyUnits3to7.js.
 */

const u12 = require('./grade9BiologyUnits1to2');
const u37 = require('./grade9BiologyUnits3to7');

module.exports = {
  gradeLevel: '9',
  subjectName: 'Biology',
  stream: 'Natural',
  subjectDescription:
    'Grade 9 Biology (Natural stream): scientific inquiry through diversity of life, cells, physiology, classification, plants, and animals.',

  chapters: [...u12, ...u37],
};
