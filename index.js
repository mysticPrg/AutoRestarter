/**
 * Created by mysticprg on 15. 1. 3.
 */

var exec = require('child_process').execFile;

exec('./restart.sh', function (err, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if ( err ) {
        console.log('exec err: ' + err);
    }
});

function run_sh(cmd) {
    exec('./' + cmd +'.sh');
}

if ( process.argv.length < 3 ) {
    console.log('few arguments...');
    process.exit();
}

var cmd = process.argv[2];

switch ( cmd ) {
    case 'start':
        break;

    case 'restart':
        break;

    default:
        console.log('not support command');
        process.exit();
        break;
}