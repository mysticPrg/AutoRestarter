/**
 * Created by mysticprg on 15. 1. 3.
 */

var app = require('express')();
var bodyParser = require('body-parser');
var request = require('request');
var runCmd = require('./runCmd');

var jobQueue = [];
var isRunning = false;;

app.use(bodyParser.json());

app.post('/', function (req, res) {
    console.log('Found new image!');

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end();

    jobQueue.push({
        url: req.body.callback_url
    });

    jobProc();
});


function jobProc() {

    // Not exist job
    if (jobQueue.length === 0) {
        return;
    }

    var job;
    while (jobQueue.length > 1) {
        job = jobQueue.shift();

        request({
            url: job.url,
            json: {
                state: 'success',
                description: "Passes old job"
            },
            method: 'POST'
        }, function (err, res) {
            if (!err && res.statusCode == 200) {
                console.log('Passed old job');
            }
        });
    }

    if (isRunning) {
        return;
    }


    isRunning = true;
    job = jobQueue.shift();
    runCmd('restart', function () {
        request({
            url: job.url,
            json: {
                state: 'success',
                description: "Success restart application"
            },
            method: 'POST'
        }, function (err, res) {
            if (!err && res.statusCode == 200) {
                console.log('Success restart application');
            }

            isRunning = false;
            setTimeout(jobProc, 0);
        });
    });
}

app.listen(8124);