console.log('1. start of script');

// Microtask queue (promise)
Promise.resolve().then(() => console.log('2.Microtask'));

//Timer queue
setTimeout(() => console.log('3. Timer 1'), 0);

// I/0 queue
const fs = require('fs');
fs.readFile('user-details.txt',() => console.log('4. I/O operation'));

//check queue
setImmediate(() => console.log('5. Immediate 1'));

// Clouser queue
process.on('exist', (code) => {
  console.log('6. Exist event');
});
console.log('7 End of cript');

