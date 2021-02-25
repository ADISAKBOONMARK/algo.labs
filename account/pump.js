const execShPromise = require('exec-sh').promise;

const algo = require('../config');

async function start() {
    const bob = await algo.bob();
    const aliza = await algo.aliza();

    await addBalance(bob);
    await addBalance(aliza);
}

async function addBalance(account) {
    try {
        await execShPromise('./sandbox goal clerk send -a 10000000 -f ' + algo.masterAddr + ' -t ' + account.addr, {
            cwd: algo.sandboxPath,
        });
    } catch (err) {
        console.log(err);
    }
}

start();
