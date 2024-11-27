const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const lineCount = lines.length - 1;

      console.log('Number of students:', lineCount);

      const fieldCounts = {};
      const studentNames = {};

      lines.slice(1).forEach((line) => {
        const fields = line.split(',');
        const firstname = fields[0];
        const field = fields[fields.length - 1];

        if (field) {
          if (!fieldCounts[field]) {
            fieldCounts[field] = 0;
            studentNames[field] = [];
          }
          fieldCounts[field] += 1;
          studentNames[field].push(firstname);
        }
      });

      for (const field in fieldCounts) {
        if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
          console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${studentNames[field].join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
