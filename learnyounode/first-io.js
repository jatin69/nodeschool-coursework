var fs = require('fs')

// returns a buffer with contents of the file
/* Will directly convert to string
  buffer=fs.readFileSync('test.txt',"UTF8");
*/

//buffer=fs.readFileSync('test.txt');

buffer=fs.readFileSync(process.argv[2]);
var contents= buffer.toString();
all_lines=contents.split('\n');
count_of_newlines= all_lines.length-1
console.log(count_of_newlines)


/*
Official solution

 var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

*/