var fs = require('fs');
var http = require('http');
console.log('Server running at http://127.0.0.1:443/');
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/demo.html'));
});
app.get('/flyer/', function(req, res) {
    res.sendFile(path.join(__dirname + '/flyer/home/index.html'));
});
app.get('/flyer/flyer.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/flyer/flyer.js'));
});
//var data = fs.readFileSync('counter');
app.listen(443);