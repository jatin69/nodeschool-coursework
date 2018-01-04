const net = require('net')
const strftime = require('strftime') // not required in browsers
 
const server = net.createServer(function (socket) {
   data = String(strftime('%Y-%m-%d %H:%M')) + "\n"; //  "2013-07-06 17:42"
   socket.write(data);
   socket.end();
 })
server.listen(Number(process.argv[2]))