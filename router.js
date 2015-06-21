function route(handle,pathrequested,response){

	if(typeof(handle[pathrequested]) === 'function')
	  handle[pathrequested](response);
	else{
	  response.writeHead(404,{"Content-Type":"text/plain"});
          response.write("404 Not Found ");
          response.end();	
	}
}

exports.route = route;