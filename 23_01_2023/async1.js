const fetchData = (param) => {
	setTimeout(() => {
		param('Done!');
	}, 2000);
};

setTimeout(() => {
	console.log('Hello World');
	fetchData(str => {
		console.log(str);
	});
}, 2000);

console.log('Hello');
console.log('Hi');


call stack
console.log('Hello');
hi

Event loop
setTimeout()
fetchData();

