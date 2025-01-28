const http = require('http');

const port = 5000; // 使用したいポート番号を指定
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running on a different port!');
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
