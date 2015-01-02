/**
 * Created by mysticprg on 15. 1. 3.
 */

var app = require('express')();
var bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.json());

app.post('/', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    var cb_url = req.body.callback_url;
    var cb_data = {
        state: 'success',
        description: 'Dockerhub webhook test'
    };
    request({
        url: cb_url,
        json: cb_data,
        method: 'POST'
    });

    res.end();
});

app.listen(8123);