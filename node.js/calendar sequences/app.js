let daysInYear = 365;
let months = 1;
let days = 0;
let counter = 0;
let years = 0;

function generateMonthsWith30Days(months, days) {}
function verifyFebruary(months, days) {}

const startTime = setInterval(() => {
	counter++;
	days++;

	const isMonth30Days = generateMonthsWith30Days(months, days);
	const isFebruary = verifyFebruary(months, days);

	if (isFebruary || isMonth30Days || days === 31) {
		months++;
		days = 0;
	}

	// Increment Years
	if (counter === daysInYear) {
		counter = 0;
		months = 0;
		years++;
	}

	console.log("Counter:", counter);
	console.log("Days:", days);
	console.log("Months:", months);
	console.log("Years:", years);
	console.log("Days in Year:", daysInYear);
	console.log("===========================");

	// Stop the counter if reaches 3 years
	if (years === 3) {
		console.log("Time has stopped!");
		clearInterval(startTime);
	}
}, 1000);
