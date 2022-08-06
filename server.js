
// //to start the server by running the file name 
// // remember that we have to restart the server manually every time 
// // create our server 
// const http = require('http'); // add the http requests  
// const fs = require('fs');
// const _ = require('lodash');

// const server = http.createServer((req , res) => { //we used the createServer method to start the server  // add the request and respond of it
//      console.log(req.url,req.method)// here we asked for the url of the request which is (/) and asked for the method which is (GET)

//      // set header content type 
//      res.setHeader('Content-Type' , 'text/html'); // content type 
     
//      //send an html file 
//      fs.readFile('./views/index.html' , (err , data) => {
//          if(err){
//             console.log(err);
//             res.end();
//          }else{
//             //  res.write(data);
//              res.end(data);
//          }
//      })


//      res.end(); // end the res

// });

// server.listen(3000, 'localhost' , () => { // we are sending the request by going to (localhost:3000)
//     console.log('listening for requests on port 3000')
// }); 

