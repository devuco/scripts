//ES5
let scores = {
	pass: 70,
	avg: 50,
	fail: 30,
};
var pass = scores.pass;
var avg = scores.avg;
var fail = scores.fail;
console.log("ES5", scores.pass, scores.avg, scores.fail);

//ES6
let scores1 = {
	pass: 70,
	avg: 50,
	fail: 30,
};
const {pass, avg, fail} = scores1;
console.log("ES6", pass, avg, fail);
