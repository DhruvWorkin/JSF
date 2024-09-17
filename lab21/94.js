var http = require('http');
server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    res.end("hola amigo");
});
server.listen(3000,()=>{
    console.log('Server is running at http://127.0.0.1:3000/');
});