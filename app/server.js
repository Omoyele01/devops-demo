const http = require('http');
const port = process.env.PORT || 3000;
const name = process.env.APP_NAME || 'DevOps Demo';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', app: name, time: new Date().toISOString() }));
});

server.listen(port, () => console.log(`listening on ${port}`));
