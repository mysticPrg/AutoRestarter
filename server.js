/**
 * Created by mysticprg on 15. 1. 3.
 */

var app = require('express')();
var bodyParser = require('body-parser');
var request = require('request');
var runCmd = require('./runCmd');

app.use(bodyParser.json());

app.post('/', function (req, res) {
    console.log('Found new image!');

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    runCmd('restart', function () {
        var cb_url = req.body.callback_url;
        var cb_data = {
            state: 'success',
            description: 'Dockerhub webhook test'
        };

        request({
            url: cb_url,
            json: cb_data,
            method: 'POST'
        }, function (err, res) {
            if (!err && res.statusCode == 200) {
                console.log('Success restart application');
            }
        });
    });

    res.end();
});

app.listen(8124);