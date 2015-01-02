/**
 * Created by mysticprg on 15. 1. 3.
 */

var app = require('express')();

app.get('/', function(req, res) {
    res.write('send: ');
    res.send(req.body);
});

app.listen(8123);