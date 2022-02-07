// 1. Select all elements

const listEl = document.querySelector("#list");
const formEl = document.querySelector("#new-item-form");
const inputEl = document.querySelector("#item-input");
//const buttonEl = document.getElementsByName("button");

// 2. When I submit the form add a new element

formEl.addEventListener("submit", (e) => {
  // 1. Prevent default form behavior of reloading and stuff
  e.preventDefault();

  // 2. Get the content from the input
  const inputValue = inputEl.value;

  // 3. Create a new div element
  const task = document.createElement("div");

  // 4. Add the input as inner text to the newly created task
  task.innerText = inputValue;

  // 5. Add the list-item class to the created task
  task.classList.add("list-item");

  // 6. Empty the input
  inputEl.value = "";

  // 7. Insert the item into list in the DOM
  listEl.appendChild(task);

  // 8. Remove a task from the list when clicked
  task.addEventListener("click", () => {
    listEl.removeChild(task);
    //task.remove();
  });
});
