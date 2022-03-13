const express = require('express')
const app = express();

app.get('/schools', (req, res) =>{
    res.send("Hello");
})

app.listen(5000, ()=>{
    console.log('Server Init on http://127.0.0.1:5000');
})