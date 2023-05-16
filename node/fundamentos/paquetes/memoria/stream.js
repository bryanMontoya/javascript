const fs = require('fs');
const stream = require('stream');

let data = '';

let readeableStream = fs.createReadStream(__dirname + '/input.txt');

readeableStream.setEncoding('UTF8');
// readeableStream.on('data', function(chunk){
//     data += chunk;
// });

// readeableStream.on('end', function(){
//     console.log(data);
// });


// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');
// process.stdout.write('estas');


