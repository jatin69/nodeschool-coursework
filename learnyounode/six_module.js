
/* filtered ls module for Question six
name is: six_module.js
*/

var fs=require('fs')
var path= require('path')

module.exports= function(dir,ext,callback){

	fs.readdir(dir,function(err,files){
		if(err) {
			//return console.error(err);
			return callback(err);	
		}
		var filtered= files.filter(function(file){
			return path.extname(file)== '.'+ext 
		})
		callback(null,filtered);
	})
}

/*
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}

*/