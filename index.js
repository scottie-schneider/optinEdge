var express = require('express');
var app = express();



app.get('/sender', function(req, res) {
   res.sendfile('public/send.html');
});

app.post('/form', function(req, res) {
 console.log(req.body.id)
 console.log(req.body.title);
 console.log(req.body.content);
 res.contentType('json');
 res.send({ some: JSON.stringify({response:'json'}) });
});

app.listen(3000);
