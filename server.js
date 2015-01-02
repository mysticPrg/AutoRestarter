/**
 * Created by mysticprg on 15. 1. 3.
 */

var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', function(req, res) {
    res.writeHead(200, {
       'Content-Type': 'application/json'
    });
    res.write('send: ');
    res.end(req.body);
});

app.listen(8123);