const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port, hostname);

exports.app = app;
