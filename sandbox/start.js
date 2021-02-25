const execShPromise = require('exec-sh').promise;

const algo = require('../config');

async function start() {
    try {
        await execShPromise('./sandbox up', {
            cwd: algo.sandboxPath,
        });
    } catch (err) {
        console.log(err);
    }
}

start();
