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
    res.end(req.body.push_data.toString());
});

app.listen(8123);