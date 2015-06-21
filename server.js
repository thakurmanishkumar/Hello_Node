

var http = require("http");
var url = require("url");

function startServer(handle,route){

  function onRequest(request,response){

 	try{
      var pathrequested = url.parse(request.url).pathname;
      route(handle,pathrequested,response);

    } catch(e){
	     // response.writeHead(200,{"Content-Type":"text/plain"}); // Looks like catch block can't be empty
	    //  response.write("Ooops! I almost crashed. Please check your implementation");}
	     // response.end();

       // This is very important. Dont write anything if an error is thrown.You will get Write after End error> Just handle it 
       console.log(e);}
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server launched succefully at port 8888 !")
}

exports.startServer = startServer;

