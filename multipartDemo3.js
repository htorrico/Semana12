var express = require('express');
var app = express();
var fs = require('fs');
var multiparty = require('connect-multiparty');
var multipartMiddleware =multiparty();
var cors = require('cors');
app.use(cors())

app.post('/uploadFile', multipartMiddleware, function(req, resp) {
    
    var file = req.files.file;
    var tmp_path = file.path;
    var target_path = './public/images/' + file.name;
    console.log(tmp_path);
    console.log(target_path);

    fs.copyFile(tmp_path,target_path,function(err)
    {
        if (err) throw err;        
        fs.unlink(tmp_path, function() {
          if (err) throw err;
          resp.status(200).send('File uploaded to: ' + target_path);          
        });
            
    });    

           
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    });