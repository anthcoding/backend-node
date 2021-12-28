const http = require('http');

const rqListenner = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
};

const server = http.createServer(rqListenner);

server.listen(3000);
