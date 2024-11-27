const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const lineCount = lines.length - 2;
    console.log(`Number of Students: ${lineCount}`);
    const CSList = lines.filter((n) => n.endsWith('CS'));
    const CSFirstNames = CSList.map((n) => n.split(',')[0]).join(', ').trim();
    const SWEList = lines.filter((n) => n.endsWith('SWE'));
    const SWEFirstNames = SWEList.map((n) => n.split(',')[0]).join(', ').trim();
    const CSListCount = CSList.length;
    const SWEListCount = SWEList.length;
    console.log(`Number of students in CS: ${CSListCount}. List: ${CSFirstNames}`);
    console.log(`Number of students in SWE: ${SWEListCount}. List: ${SWEFirstNames}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
