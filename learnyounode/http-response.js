var http= require('http')
var URL = process.argv[2]

// response is a node stream object
http.get(URL,function(response){
	//console.log(response);

	var contents= "";

	response.setEncoding("utf8")
	
	response.on("err",function(data){
		console.log(data)
	})

	response.on("data",function(chars){
		contents += chars
	})
	
	response.on("end",function(data){
		console.log(contents.length)
		console.log(contents)
	})
})

/*
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})

*/