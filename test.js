// const fs = require('fs')// fs == file system


//reading files
// fs.readFile('./docs/text.txt',(err,data)=> { // this is ascync process that's mean it may take some time
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())// if we use data witout tostring() function this will return a buffer 
  
// })

//writing files 
// fs.writeFile('./docs/text1.txt','ezyak w ezay omk',()=>{ // first argument is the directory of the file , second argument is what do you want to write , third function is a callback to check if it executed 
//        console.log('written');
// })

//directories 
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created')
//     })
// }

//delete files
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt',(err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('file deleted')
//     })
// }


// streams
// we can either send the data in one piece or either send it as buffer which is little bits of data the will be collected at the end as one stream
// const fs = require ('fs'); // to add the file system  properities
// const { writeHeapSnapshot } = require('v8');

// const readStream = fs.createReadStream('./docs/data.txt');// to acreate a stream to send data 
// const writeStream = fs.createWriteStream('./docs/data.txt'); // to collect the data stream 
// readStream.on('data',(chunk) => {
//     console.log('___ new chunk');
//     console.log(chunk.toString);
//     writeStream.write('\nNew Chink\n')
//     writeStream.write(chunk);
// });


