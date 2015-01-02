/**
 * Created by mysticprg on 15. 1. 3.
 */

var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', function(req, res) {
    console.log(req.body);
    res.writeHead(200, {
       'Content-Type': 'application/json'
    });
    res.end({
        state: 'success',
        description: 'Dockerhub webhook test'
    });
});

app.listen(8123);