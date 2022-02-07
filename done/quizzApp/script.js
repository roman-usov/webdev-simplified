/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const formEl = document.querySelector('#quiz-form');
const answerElements = document.querySelectorAll('.answer');
const questionElements = document.querySelectorAll('.question-item');
const alertEl = document.querySelector('#alert');

/*
  TODO: 3. Create a submit event listener for the form that does the following.
*/

formEl.addEventListener('submit', (event) => {
	// 1. Prevent the default behavior
	event.preventDefault();

	// 2. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
	[...questionElements].forEach((question) => {
		question.classList.add('incorrect');
		question.classList.remove('correct');
	});

	// 3. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
	const checkedAnswers = [...answerElements].filter((answer) => answer.checked);

	// 4. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
	// 5. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
	// 6. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
	checkedAnswers.forEach((answer) => {
		if (answer.value === 'true') {
			answer.closest('.question-item').classList.add('correct');
			answer.closest('.question-item').classList.remove('incorrect');
		} else {
			answer.closest('.question-item').classList.add('incorrect');
			answer.closest('.question-item').classList.remove('correct');
		}
	});

	//  7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
	if (
		checkedAnswers.every((answer) => answer.value === 'true') &&
		checkedAnswers.length === questionElements.length
	) {
		alertEl.classList.add('active');

		setTimeout(() => {
			alertEl.classList.remove('active');
			[...questionElements].forEach((question) => {
				question.classList.remove('correct');
			});
			checkedAnswers.forEach((answer) => (answer.checked = false));
		}, 1000);
	}
});
