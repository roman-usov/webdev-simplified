// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

const form = document.querySelector('#form');
const errorsContainer = document.querySelector('.errors');
const errorsList = document.querySelector('.errors-list');
const userNameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const passwordConfirmationInput = document.querySelector(
	'#password-confirmation'
);
const termsCheckbox = document.querySelector('#terms');

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

form.addEventListener('submit', (event) => {

	const errorMessages = [];

	clearMessages();

	if (userNameInput.value.length < USER_NAME_LENGTH) {
		errorMessages.push('Username must be at least 6 characters long');
	}
	if (passwordInput.value.length < PASSWORD_LENGTH) {
		errorMessages.push('Password must be at least 10 characters long');
	}
	if (passwordConfirmationInput.value !== passwordInput.value) {
		errorMessages.push('Password and Password Confirmation must match');
	}
	if (!termsCheckbox.checked) {
		errorMessages.push('Agree to Terms must be checked');
	}
	console.log(errorMessages);

	if (errorMessages.length > 0) {
		event.preventDefault();
		showErrors(errorMessages);
	}
});

function showErrors(errorMessages) {
	errorMessages.forEach((message) => addErrorToList(message));

	errorsContainer.classList.add('show');
}

function addErrorToList(message) {
	const errorMessage = document.createElement('li');

	errorMessage.classList.add('error-item');

	errorMessage.innerText = message;

	errorMessage.dataset.error = message;

	errorsList.appendChild(errorMessage);
}

function clearMessages() {
	while (errorsList.children.length !== 0) {
		errorsList.children[0].remove();
	}

	errorsContainer.classList.remove('show');
}
