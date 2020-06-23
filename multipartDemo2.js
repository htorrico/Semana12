var express = require('express');
var app = express();
app.get('/', function (req,res) {  res.send('Hello World!');
});

// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();
var multiparty = require('connect-multiparty'),
multipartMiddleware = multiparty({ uploadDir: './public/images' });

app.post('/uploadFile', multipartMiddleware, function(req, resp) {

    // console.log(req.body, req.files);
    var file = req.files.file;
    // console.log(file);
    console.log(file.name);
    console.log(file.type);
    resp.status(200).send('OK');  
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    });