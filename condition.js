function myFunction() {
	const text = null;
	const fruits = "Orange";
	// var fruits = document.getElementById("myInput").value;

	switch (fruits) {
		case "Banana":
			// text = "Banana is good!";
			console.log("Banana is good!");
			break;
		case "Orange":
			// text = "I am not a fan of orange.";
			console.log("Orange is good!");
			break;
		case "Apple":
			// text = "How you like them apples?";
			console.log("Apple is good!");
			break;
		default:
			// text = "I have never heard of that fruit...";
			console.log("I have never heard of that fruit...");
	}
	// document.getElementById("demo").innerHTML = text;
}
console.log(myFunction());
