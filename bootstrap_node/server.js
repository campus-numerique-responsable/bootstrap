const http = require('http');
const app = require('./app');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

const server = http.createServer(app);
server.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
