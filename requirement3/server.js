var express = require('express');
var app = express()

app.get('/', function(req, res) {
    res.send("This is the root!")
})

app.get('/hello-world', function(req, res) {
    res.send("Hello, World!")
})

app.listen(8080, '0.0.0.0');
console.log('Running on http://0.0.0.0:8080')