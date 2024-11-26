function countStudents(path) {
  const fs = require('fs');
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const lineCount = lines.length - 2;
    console.log("Number of Students: " + lineCount);
    CSList = lines.filter(n => Boolean(n.find('CS')) === true);
    console.log(CSList);
    console.log(lines);
  } catch(err) {
    console.log(err);
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
