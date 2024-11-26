function countStudents(path) {
  const fs = require('fs');
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const lineCount = lines.length - 2;
    console.log('Number of Students: ' + lineCount);
    CSList = lines.filter(n => n.endsWith('CS'));
    SWEList = lines.filter(n => n.endsWith('SWE'));
    CSListCount = CSList.length;
    SWEListCount = SWEList.length;
    console.log("Number of students in CS: "  + CSListCount + ". " + "List: " + CSList.map( n => n.split(',')[0]));
    console.log("Number of students in SWE: " + SWEListCount + ". " + "List: " + SWEList.map(n => n.split(',')[0]));
  } catch(err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
