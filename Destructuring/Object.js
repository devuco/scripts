//ES5
// let scores = {
// 	pass: 70,
// 	avg: 50,
// 	fail: 30,
// };

// console.log(scores.pass, scores.avg, scores.fail);

//ES6
let scores = {
	pass: 70,
	avg: 50,
	fail: 30,
};

const {pass, avg, fail} = scores;
console.log(scores.pass, scores.avg, scores.fail);
