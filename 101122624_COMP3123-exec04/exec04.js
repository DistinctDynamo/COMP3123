const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/hello',(req, res)=>{
    res.send('Hello Express JS!');
});

app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";
    res.json({
        fname: firstname,
        lname: lastname
    })
});

app.post("/user/:firstname/:lastname",(req,res)=>{
    const {firstname, lastname} = req.params
    res.json({
        fname: firstname,
        lname: lastname
    })
});

app.post("/users",(req,res)=>{
    const array = [{firstname = "Pritesh", lastname = "Patel"},
            {firstname = "john", lastname = "doe"},
            {firstname = "jon", lastname= "rome"}
        ] = req.body;

    res.send(array);
});


app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000');
});