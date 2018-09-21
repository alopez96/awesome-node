const fs = require('fs');

//readFile is asynchronous
//use this one when building a server, so that there is no max delay
fs.readFile('./hello.txt', (err, data) => {
  if(err) {
    console.log('error');
  }
  console.log('Async', data.toString('utf8'));
})

//this one can be slow when you have a large file or server
const file = fs.readFileSync('./hello.txt');
console.log('sync', file.toString());

//APPEND
// fs.appendFile('./hello.txt', ' This is will be added to hello file', err => {
//   if(err){
//     console.log(err);
//   }
// })


//Write
fs.writeFile('bye.txt', 'goodbye', err=>{
  if(err){
    console.log(err)
  }
})

//DELETE
fs.unlink('./bye.txt', err =>{
  if(err){
    console.log(err);
  }
  console.log('bye.txt is deleted')
})
