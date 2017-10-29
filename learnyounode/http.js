var http= require('http')
var URL = process.argv[2]

// response is a node stream object
http.get(URL,function(response){
	//console.log(response);
	response.setEncoding("utf8")
	response.on("data",function(data){
		console.log(data)
	})
})