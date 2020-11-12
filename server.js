const http = require('http');
const app = require('./app')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('hello world');
        res.end();
    }
    if(req.url === '/amanmart'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000.....')