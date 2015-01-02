/**
 * Created by mysticprg on 15. 1. 3.
 */

function run_sh(cmd) {
    console.log('run cmd: ' + cmd);
    exec('./' + cmd +'.sh');
}

module.exports = function(cmd) {
    switch ( cmd ) {
        case 'start':
            break;

        case 'restart':
            break;

        default:
            console.log('not support command');
            break;
    }
};