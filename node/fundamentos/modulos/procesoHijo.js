const { exec, spawn } = require('child_process');

exec('ls', (err, stdout, sterr) => {
    if (err){
        console.error("Error");
        return false;
    }

    console.log(stdout);
});

// let proceso = spawn('ls', ['-la']);

// console.log(proceso);