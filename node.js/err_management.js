// CHAPTER 80
// 1-)

try {
	var a = 1;
	b++; //this will cause an error because be is undefined
	console.log(b); //this line will not be executed
} catch (error) {
	console.log(error); //here we handle the error caused in the try block
}

// 2-)
