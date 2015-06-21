var server = require("./server");
var router = require("./router");
var requesthandler = require("./requesthandler");

var handle = {};
handle["/"] = requesthandler.emptyRequest;
handle["/hello"] = requesthandler.helloUser;
handle["/welcome"] = requesthandler.welcome;
handle["/displayjson"] = requesthandler.displayJson;
handle["/displaytext"] = requesthandler.displayText;

server.startServer(handle,router.route);


