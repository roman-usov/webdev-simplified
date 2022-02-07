// const URL = 'https://jsonplaceholder.typicode.com/comments?postId=1';

/* fetch(URL)
	.then((response) => response.json())
	.then((data) => {
		data.forEach((user) => console.log(user.name));
	}); */

/* async function getComments() {
	try {
		const response = await fetch(URL);
		console.log(response);
		if (response.ok) {
			const comments = await response.json();
			console.log(comments);
		} else {
			const error = new Error('Error');
			error.status = response.status;
			throw error;
		}
	} catch (err) {
		console.log(`Error status: ${err.status}, Error message: ${err.message}`);
	}
}

getComments(); */

/* function foo() {
	console.log('foo');
}
function bar() {
	setTimeout(foo);
	console.log('bar');
}
function baz() {
	setTimeout(() => console.log('baz'));
}
function liz() {
	requestAnimationFrame(() => console.log('liz'));
}
function rep() {
	Promise.resolve().then(() => console.log('rep'));
}
console.log('start');
foo();
bar();
baz();
liz();
rep();
console.log('end'); */

function doSomething() {
	let x = 0;
	let flag = false;

	setTimeout(() => {
		flag = true;
	}, 2000);

	while (flag === 'false') {
		x += 1;
		console.log(x);
	}

	return x;
}

console.log(doSomething());
