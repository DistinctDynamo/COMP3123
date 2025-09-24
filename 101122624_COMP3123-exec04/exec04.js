const express = require('express');
const app = express();

app.get('/hello',(req, res)=>{
    res.send('Hello Express JS!');
});



app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000');
});