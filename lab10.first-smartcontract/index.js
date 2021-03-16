const execShPromise = require('exec-sh').promise;

const algo = require('../config');

async function start() {
    const bob = await algo.bob();

    // const addrCreator = algo.masterAddr;

    // await execSandbox(`goal wallet list`);

    const addrCreator = bob.addr;

    const lab = 'lab10.first-smartcontract';
    const approvalProgram = 'approval_program.teal';
    const clearProgram = 'clear_state_program.teal';

    const tealApprovalProg = `${algo.labsPath}/${lab}/${approvalProgram}`;
    const tealClearProg = `${algo.labsPath}/${lab}/${clearProgram}`;

    const globalByteslices = 0;
    const globalInts = 1;
    const localByteslices = 0;
    const localInts = 0;

    let cmd = 'docker cp ' + tealApprovalProg + ' $(docker ps -qf name=algod):/opt/testnetwork/Node';

    await exec(cmd);

    cmd = 'docker cp ' + tealClearProg + ' $(docker ps -qf name=algod):/opt/testnetwork/Node';

    await exec(cmd);

    cmd = `goal app create --creator ${addrCreator} \
                    --approval-prog ${approvalProgram} \
                    --clear-prog ${clearProgram} \
                    --global-byteslices ${globalByteslices} \
                    --global-ints ${globalInts} \
                    --local-byteslices ${localByteslices} \
                    --local-ints ${localInts}`;

    await execSandbox(cmd);

    // cmd = 'goal account list';

    // await execSandbox(cmd);
}

async function exec(cmd) {
    try {
        console.log('commnad:', cmd);
        await execShPromise(cmd, {});
    } catch (err) {
        console.log(err);
    }
}

async function execSandbox(cmd) {
    try {
        console.log('commnad:', cmd);
        await execShPromise('./sandbox ' + cmd, {
            cwd: algo.sandboxPath,
        });
    } catch (err) {
        console.log(err);
    }
}

start();
