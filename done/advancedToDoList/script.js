// DOM Elements

const toDoContainer = document.querySelector('#list');
const toDoForm = document.querySelector('#new-todo-form');
const toDoInput = document.querySelector('#todo-input');
const template = document.querySelector('#list-item-template');

// Constants and Variables
const LOCAL_STORAGE_PREFIX = 'ADVANCED_TODO_LIST';
// best to have a prefix for the key not to get confused with keys from other pages and apps

const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;

// Initialization
const toDoItems = loadTodos();

if (toDoItems.length > 0) {
	toDoItems.forEach(renderToDoEl);
}

// Event Listeners

// Get input and create a todo in the code and in the DOM
toDoForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const input = toDoInput.value;
	if (!input) return;

	const toDo = createToDoItem(input);

	toDoItems.push(toDo);

	saveTodos();

	renderToDoEl(toDo);

	toDoInput.value = '';
});

// Get saved todos from Local Storage upon page load
window.addEventListener('load', loadTodos);

// Delete a todo
toDoContainer.addEventListener('click', deleteToDoEl);

// Mark a todo as checked
toDoContainer.addEventListener('change', toggleCheck);

// Functions

// Create a todo in the code
function createToDoItem(input) {
	return {
		id: new Date().valueOf().toString(), //valueOf() gives us the value of the current time to the millisecond
		input,
		complete: false,
	};
}

// Render a todo in the DOM
function renderToDoEl(toDoData) {
	const templateClone = template.content.cloneNode(true);

	const textElement = templateClone.querySelector('[data-list-item-text]');
	textElement.innerText = toDoData.input;

	const listElement = templateClone.querySelector('.list-item');
	listElement.dataset.id = toDoData.id;

	const checkbox = templateClone.querySelector('[data-list-item-checkbox]');
	checkbox.checked = toDoData.complete;

	toDoContainer.appendChild(templateClone);
}

// Save todos to Local Storage
function saveTodos() {
	localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(toDoItems));
}

// Get todos from Local Storage
function loadTodos() {
	return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
}

// Delete todo
function deleteToDoEl(event) {
	const clickedEl = event.target;

	// if(element.matches('[data-button-delete]'))
	if (!clickedEl.hasAttribute('data-button-delete')) return;

	const elToDelete = clickedEl.closest('.list-item');

	const itemToDeleteIndex = toDoItems.findIndex(
		(item) => item.id === elToDelete.dataset.id
	);

	toDoItems.splice(itemToDeleteIndex, 1);

	elToDelete.remove();

	saveTodos();
}

// Toggle checkbox
function toggleCheck(event) {
	const element = event.target;

	// if(element.matches('[data-list-item-checkbox]'))
	if (!element.hasAttribute('data-list-item-checkbox')) return;

	const curToDoEl = element.closest('.list-item');

	const toDoItem = toDoItems.find((item) => item.id === curToDoEl.dataset.id);

	toDoItem.complete = element.checked;

	saveTodos();
}
