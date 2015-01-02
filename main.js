/**
 * Created by mysticprg on 15. 1. 3.
 */


var runCmd = require('./runCmd');

var cmd = process.argv[2];
runCmd(cmd, function(err) {
    console.log(err);
});