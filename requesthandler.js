
var fs = require("fs");


function emptyRequest(response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Please request something");
    response.end();
}

function helloUser(response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello Manish ! How can I serve you");
    response.end();
 
}



function displayJson(response){
    var userjson =  require("./sample.json");
    var userString = JSON.stringify(userjson,null,2); // 2nd and 3rd argument for pretty printing
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write(userString.toString());
    response.end();
}

function displayText(response){

    fs.readFile('textfile.txt',function(err,data){
      if(err){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(err.toString());
        response.end();
      }
      else{
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(data.toString());
        response.end();
      }
    });
}



exports.emptyRequest = emptyRequest;
exports.helloUser = helloUser;
exports.displayJson =displayJson;
exports.displayText = displayText;


/*
  var user = {
  username: 'The Reddest',
  email: 'brandon@switchonthecode.com',
  firstName: 'Brandon',
  lastName: 'Cannaday'
};

var userString = JSON.stringify(user);
*/
