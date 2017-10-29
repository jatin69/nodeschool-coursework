var module=require('./six_module.js')
var dir=process.argv[2];
var ext=process.argv[3];


module(dir,ext, function(err,files){
	//console.log(files)
	if (err) {
    console.error('There was an error:', err)
  	}
	files.forEach(function (file) {
          console.log(file)
	})
})



/*
Solution file -



var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})

*/