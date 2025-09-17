const http = require('http');
const students = require('./modules/students');

const SERVER_PORT = 3000;
const SERVER_HOST = "local";//127.0.0.

const server = http.createServer((req,res) =>{
    console.log(req.method); //GET, POST, PUT, DELETE
    console.log(req.url);
    if(req.method!=='GET'){
    if(req.url==='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end('<h1>Hello, world!<h1>');
    }
    else if(req.url==='/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end('<h1>About Us<h1><p>This is the about page<p>');
    }
    if(req.url==='/Students'){
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        const studentsList = students.getStudents();
        res.end(JSON.stringify(studentsList));
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end('<h1>404 Not found<h1><p>The page you are looking for does not exist<p>');
    }
}
})

server.listen(SERVER_PORT,SERVER_HOST, () =>{
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})