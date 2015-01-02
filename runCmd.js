/**
 * Created by mysticprg on 15. 1. 3.
 */

function run_sh(cmd, callback) {
    exec('./' + cmd + '.sh', callback);
}

module.exports = function (cmd, callback) {
    switch (cmd) {
        case 'start':
        case 'restart':
            run_sh(cmd, callback);
            break;

        default:
            console.log('not support command');
            break;
    }
};