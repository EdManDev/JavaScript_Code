// This is a feature called template literals.

// They were called "template strings" in prior editions of the ECMAScript 2015 specification.

// var a = 123,
//   str = `---
//   a is: ${a}
// ---`;
// console.log(str);

// Interpolated Expressions
function upper(s) {
  return s.toUpperCase();
}
var who = "reader";
var text = `A very ${upper("warm")} welcome 
to all of you
Edman ${upper(`${who}s`)}!`;
console.log(text);
// A very WARM welcome
// to all of you READERS!

// NEXT or don't confnd to above
function foo(str) {
  var name = "foo";
  console.log(str);
}
function bar() {
  var name = "bar";
  foo(`Hello from ${name}!`);
}
var name = "global";
bar(); // "Hello from bar!"

// Tagged Template Literals
// function myTaggedLiteral(strings) {
//   console.log(strings);
// }

// myTaggedLiteral`test`; //["test"]

// function myTaggedLiteral(strings, value, value2) {
//   console.log(strings, value, value2);
// }
// let someText = "Neat";
// myTaggedLiteral`test ${someText} ${2 + 3}`;
// //["test", ""]
// // "Neat"
// // 5

console.log(`Hello\nWorld`);
/* "Hello
World" */

console.log(String.raw`Hello\nWorld`);
// "Hello\nWorld"
