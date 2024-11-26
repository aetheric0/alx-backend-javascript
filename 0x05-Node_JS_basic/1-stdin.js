console.log('Welcome to Holberton School, what is your name?');
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (name) => {
  console.log(`Your name is: ${name.trim()}`);
  console.log('This important software is now closing');
  process.end();
});
