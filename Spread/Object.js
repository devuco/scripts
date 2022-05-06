let obj = {
	a: "value a",
	b: "value b",
};

let obj1 = {
	c: "value c",
	d: "value d",
};

let newObj = {
	...obj,
	...obj1,
};

console.log(newObj);
