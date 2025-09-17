var http = require("http");
const employee = require('./modules/Employee');
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            res.end('<h1>Welcome to Lab Exercise 03<h1>');
        }
        if (req.url === '/employee') {
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            const employeeList = employee.getEmployees();
            res.end(JSON.stringify(employeeList));
        }
        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
           
        }
        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})