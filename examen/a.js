// (let = 23),
// 	setTimeout(function () {
// 		modal.classList.remove("hidden");
// 	}, 10000);
// console.log("Results shown");
// ------------------------------------------------

// let discountPrice function(price) {
// return price * 0.85;
// };
// ------------------------------------------------

// class TaxCalculator {
// 	static calculate(total) {
// 		return total * 0.05;
// 	}
// }

// console.log(TaxCalculator);
// ------------------------------------------------

// "use strict";
// function logThis() {
// this.desc "logger";
// console.log(this);
// }
// new logThis();

// ------------------------------------------------
// console.log(typeof 42);
// ------------------------------------------------

// const x = 6 % 2;
// const y = x ? "One" : "Two";
// console.log(y);

// ------------------------------------------------

// Student.prototype = new Person();
// Student.prototype Person;
// Student.prototype Person();
// Student.parent = Person;

// ------------------------------------------------
// let roadTypes = ["street", "road", "avenue", "circle"];
// console.log(roadTypes);
// ------------------------------------------------

// let a = 5;
// console.log(++a);
// ------------------------------------------------
// process.on("uncaughtException", function (err) {
// 	if (err instanceof TypeError) {
// 		throw "Type error";
// 	} else if (err instanceof ReferenceError) {
// 		throw "Reference error";
// 	} else if (err instanceof RangeError) {
// 		throw "Range error";
// 	} else {
// 		throw "Unknown error";
// 	}
// });
// console.log(null.length());

// ------------------------------------

// function cb1() {
// 	console.log("look here");
// }
// function cb2() {
// 	console.log("no, look here");
// }
// process.nextTick(cb2);
// console.log("no-no, look here");
// process.nextTick(cb1);
// console.log("\n");
// console.log("\n");
// console.log("\n");
// console.log(cb1());

// ------------------------------------

// const result [];
// a.forEach(async (item) => {
// result.push(await process(item));

// async function process(item) {
// 	return item * 2;
// }

// const a = [1, 2, 3, 4, 5];
// console.log("\n");
// console.log("\n");
// console.log("\n");
// console.log(process());
// ------------------------------------

// const fs = require("fs");
// const path = "hello.txt";
// const buffer = Buffer.from("Hello, world!");

// fs.open(path, "r", (err, fd) => {
// 	if (err) throw err;
// 	fs.write(fd, buffer, 1, buffer.length - 1, null, (err) => {
// 		if (err) throw err;
// 	});
// 	fs.close(fd, (err) => {
// 		if (err) throw err;
// 	});
// });

// ------------------------------------

// const fs = require("fs");
// const path = "hello.txt";

// fs.writeFile(path, "Hello, world!", (err) => {
// 	if (err) throw err;
// });

// ------------------------------------

// app.post("/process", function (req, res) {
// 	let data = "";
// 	if (req.xhr) {
// 		data += "Hello, ";
// 	}
// 	if (req.body.field) {
// 		data += "world";
// 	}
// 	data += "!";
// });

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
