const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const lineCount = lines.length - 2;
    console.log(`Number of Students: ${lineCount}`);
    const CSList = lines.filter((n) => n.endsWith('CS'));
    const SWEList = lines.filter((n) => n.endsWith('SWE'));
    const CSListCount = CSList.length;
    const SWEListCount = SWEList.length;
    console.log(`Number of students in CS: ${CSListCount}. List: ${CSList.map((n) => n.split(',')[0]).join(', ')}`);
    console.log(`Number of students in SWE: ${SWEListCount}. List: ${SWEList.map((n) => n.split(',')[0]).join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
