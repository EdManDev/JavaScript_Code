const weight = -12.2;
try {
	if (weight < 0) {
		throw "weight can not be less than 0";
	}
	console.log("Saving today's weight to database...");
} catch (error) {
	console.log(error);
}
