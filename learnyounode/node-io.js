/*
function addOne(thenRunThisFunction) {
  waitAMinuteAsync(function waitedAMinute() {
    thenRunThisFunction()
  })
}

addOne(function thisGetsRunAfterAddOneFinishes() {})
*/

// concept of call back

var fs = require('fs')

var lines = undefined

function count(callback){

	// here doneReading is the callback of readFile.
	fs.readFile(process.argv[2], function doneReading(err,contents){
		lines=contents.toString().split("\n").length-1
		callback();
		// callback is the call back of count
	})
}

count(function callback(){
	console.log(lines);
})


/*
Solution -

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})

*/
