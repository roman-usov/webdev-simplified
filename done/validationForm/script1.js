// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

const form = document.querySelector('#form');
const errorsContainer = document.querySelector('.errors');
const errorsList = document.querySelector('.errors-list');
const userName = document.querySelector('#user-name');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');
const terms = document.querySelector('#terms');

// TODO: Create an event listener for when the form is submitted and do the following inside of it.

// Also, make sure you remove the show class to the errors container

//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages

// Loop through all the children of the error-list element and remove them
// IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
// I recommend using a while loop to accomplish this task
// This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.

const USER_NAME_LENGTH = 6;
const PASSWORD_LENGTH = 10;

const errorsMap = {
	1: 'User name is missing or is less than 6 characters',
	2: 'Password is missing or is less than 10 characters',
	3: 'Password and Password Confirmation are missing or do not match',
	4: 'Agreed to Terms must be checked',
};

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = [...new FormData(form)];

	const errorsInUI = currentErrorsInUI();

	const errors = validateAndReturnErrors(formData);

	if (errorsInUI.length === 0 && errors.length !== 0) {
		showErrors(errors);
	} else {
		updateErrors(errors, errorsInUI);
	}
});

function validateAndReturnErrors(formData) {
	const errors = [];

	const username = formData[0][1];
	const password = formData[1][1];
	const passwordConfirmation = formData[2][1];
	const terms = formData[3] ? formData[3][1] : '';

	if (!username || username.length < USER_NAME_LENGTH) {
		errors.push(errorsMap['1']);
	}

	if (!password || password.length < PASSWORD_LENGTH) {
		errors.push(errorsMap['2']);
	}

	if (!passwordConfirmation || passwordConfirmation !== password) {
		errors.push(errorsMap['3']);
	}

	if (!terms) {
		errors.push(errorsMap['4']);
	}
	return errors;
}

function updateErrors(formErrors, uiErrors) {
	if (formErrors.length === 0) {
		uiErrors.forEach((error) => removeErrorFromList(error));

		window.location.href = 'thank-you.html';

		errorsContainer.classList.remove('show');

		return;
	}

	if (uiErrors.length > 0) {
		formErrors.forEach((error) => {
			if (!uiErrors.includes(error)) {
				addErrorToList(error);
			}
		});

		uiErrors.forEach((error) => {
			if (!formErrors.includes(error)) {
				removeErrorFromList(error);
			}
		});
	}

	sortErrors();
}

function sortErrors() {
	const errorElements = Array.from(errorsContainer.querySelectorAll('li'));
	errorElements
		.sort((a, b) => {
			const errorAIndex = getKeyByValue(errorsMap, a.dataset.error);
			const errorBIndex = getKeyByValue(errorsMap, b.dataset.error);

			return errorAIndex - errorBIndex;
		})
		.forEach((el) => {
			const message = el.dataset.error;

			removeErrorFromList(message);

			errorsList.append(el);
		});
}

function getKeyByValue(object, value) {
	return Object.keys(object).find((key) => object[key] === value);
}

function showErrors(errorsMap) {
	errorsMap.forEach((message) => addErrorToList(message));

	errorsContainer.classList.add('show');
}

function currentErrorsInUI() {
	const errors = errorsContainer.querySelectorAll('li');

	if (errors.length === 0) {
		return [];
	}

	return [...errors].map((error) => error.innerText);
}

function addErrorToList(message) {
	const errorMessage = document.createElement('li');

	errorMessage.classList.add('error-item');

	errorMessage.innerText = message;

	errorMessage.dataset.error = message;

	errorsList.appendChild(errorMessage);
}

function removeErrorFromList(message) {
	const errorToRemove = errorsList.querySelector(
		`.error-item[data-error="${message}"]`
	);

	errorToRemove.remove();
}
