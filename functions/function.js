function fun() {
	console.log("ES5 Function");
}
fun();

const fun = () => console.log("ES6 Function");
fun();

const fun = () => {
	console.log("ES6 Multiline function");
};
fun();
