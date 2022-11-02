var msg = 'Name Surname';
var acronym = msg.match(/\b(\w)/g).join('');
var number = Math.floor(10000 + Math.random() * 90000);

console.log(acronym + '-' + number);
