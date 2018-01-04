const http = require('http')
const fs = require('fs')

file = process.argv[3];

const server = http.createServer(function (req, res) {
	//res.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(file).pipe(res)
    
})
server.listen(Number(process.argv[2]))