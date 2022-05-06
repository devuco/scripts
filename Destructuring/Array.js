//ES5
var scores = [500, 400, 300];
var x = scores[0];
var y = scores[1];
var z = scores[2];
console.log("ES5", x, y, z);

//ES6
let scores = [500, 400, 300];
let [x, y, z] = scores;
console.log("ES6", x, y, z);

//ES6
let scores = [500, 400, 300];
let [x, y, z, w] = scores;
console.log("ES6", x, y, z, w);
