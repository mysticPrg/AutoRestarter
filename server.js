/**
 * Created by mysticprg on 15. 1. 3.
 */

var app = require('express')();

app.get('/', function(req, res) {
    res.send('test server...');
});

app.listen(8123);