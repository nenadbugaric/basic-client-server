const http = require('http');

// From dependencies
const cowsay = require("cowsay");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    res.setHeader('Content-Type', 'text/plain');

    const cowSayText = cowsay.say({
        text: "I'm a moooodule"
    })

    res.end(cowSayText);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});
