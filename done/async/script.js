/* function setTimeoutPromise(sec) {
	return new Promise((resolve) => {
		setTimeout(resolve, sec * 1000);
	});
}

setTimeoutPromise(1)
	.then(() => {
		console.log('1');
		return setTimeoutPromise(2);
	})
	.then(() => {
		console.log('2');
		return setTimeoutPromise(3);
	})
	.then(() => {
		console.log('3');
	}); */

/* const button = document.querySelector('button');
console.log(button);

function addEventListenerPromise(element, method) {
	return new Promise((resolve, reject) => {
		element.addEventListener(method, resolve);
	});
}

addEventListenerPromise(button, 'click').then((e) => {
	console.log('You clicked me');
	console.log(e);
}); */

/* Promise.all([Promise.resolve('1'), Promise.reject('2'), Promise.resolve('3')])
	.then((messages) => console.log(messages))
	.catch((err) => console.log(err)); */

/* function setTimeoutPromise(sec) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`You waited ${sec} seconds.`);
		}, sec * 1000);
	});
}

async function doStuff() {
	const wait1 = await setTimeoutPromise(1);
	console.log(wait1);

	const wait2 = await setTimeoutPromise(1);
	console.log(wait2);

	const wait3 = await setTimeoutPromise(1);
	console.log(wait3);
}

doStuff(); */

const values = ['Kyle', 'Cook', 'Hi'];

function getValueWithDelay(value, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(value);
		}, delay * 1000);
	});
}

function getErrorWithDelay(value, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('Error');
		}, delay * 1000);
	});
}

/* async function getValues() {
	try {
		const val1 = await getValueWithDelay('value1', 1);
		console.log(val1);
		
		const val2 = await getValueWithDelay('value2', 1);
		console.log(val2);

		const val2 = await getValueWithDelay('value2', 1);
		console.log(val2);
		
	} catch (err) {
		console.error(err);
	}
} */

/* async function getValues(values) {
	for (let i = 0; i < values.length; i += 1) {
		const message = await getValueWithDelay(values[i], 1);
		console.log(message);
	}
} */

/* for (let i = 0; i < values.length; i += 1) {
	getValueWithDelay(values[i], 1).then((message) => console.log(message));
} */

async function getValues(values) {
	try {
		values.forEach(async (value) => {
			const message = await getValueWithDelay(value, 1);
			console.log(message);
		});
	} catch (err) {
		console.error(err);
	}
}

getValues(values);
