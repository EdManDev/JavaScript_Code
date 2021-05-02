const date1 = new Date("05/02/2021");
const date2 = new Date("05/05/2021");

const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// console.log(diffTime + " milliseconds");
console.log("you have " + diffDays + " days left"); // start counting from the next day
