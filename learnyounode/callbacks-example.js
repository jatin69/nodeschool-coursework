
function fetchURL(displayURL){
	console.log("\ninside fetch URL");
	displayURL(test);
}

function displayURL(test){
	console.log("inside display URL");
	test(testsecond);
}

function test(testsecond){
	console.log("hello world");
	testsecond();
}


function testsecond(){
	console.log("Myself Jatin");
}

fetchURL(displayURL);

/*

*/