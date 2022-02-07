/*const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Save the current value of a data attribute in a variable
    const counter = parseInt(button.dataset.clicks);

    // Set the value of a data attribute to a new value
    button.dataset.clicks = counter + 1;
  });
});

const grandParentEl = document.querySelector("#grand-parent");

grandParentEl.style.color = "red";

console.log(grandParentEl.children);

const parentOne = grandParentEl.children[0];

parentOne.style.color = "green";

const parentTwo = parentOne.nextElementSibling;*/

// const childOne = document.querySelector("#child-one-id");
//
// const parentOne = childOne.parentElement;
//
// const grandParentEl = childOne.closest(".grand-parent");

const grandParentEl = document.querySelector(".grand-parent");

const children = grandParentEl.querySelectorAll(".child");

///////// Passing a function to another function ///////////

/*
Functions can be treated just like a regular variable whose value is actually a definition of this function.
Just like we can pass variables to a function as arguments, we can pass in a function.

*/

// Option 1 - callback as a separate function

/*

// Our callback
function printVariable(variable) {
  console.log(variable);
}

// Our function with a callback
function printName(name, callback) {
  callback('Hello ' + name);
}

printName('Kyle', printVariable);
*/

// Option 2 - callback as an anonymous function

// Our function with a callback
/*
function printName(name, callback) {
  callback('Hello ' + name);
}
*/

// Our call of a function with an anonymous callback inside
/*
printName('Kyle', function(variable) {
  console.log(variable)
});
*/

///////// The Callstack and Stack Tracing  ///////////
/*

function print(variable) {
  console.log(variable);
}

function sum(a, b) {
  return a + b;
}

function sayHi (name) {
  return 'Hi ' + name;
}

function doStuff(a, b, name) {
  print(sum(a, b));
  print(sayHi(name));
}

doStuff(1, 2, 'Kyle');
*/

///////// Closures ///////////

/*
function print(variable) {
  const c = 3;
  return function printTwoVariables(variable2) {
    console.log(variable);
    console.log(variable2);
    console.log(c);
  }
}

const a = print(1);
a(2);
*/

/*
Closures can be pretty much explained through scoping.
printTwoVariables() has access to variable2. However, through scoping, it also has access to variable.
When we return printTwoVariables by calling print with the variable of 1, printTwoVariables retains access
to variable=2 through a closure.
And the same is true for the variable c.
*/

///////// Var Variable ///////////

//  Var is not limited to the local scope, i.e. it's not block-scoped

// {
//   var a = 1;
// }

// console.log(a);
//  We get a printed out

// Var is hoisted as undefined when the code is run

// You can redefine a var variable with the var keyword

// var b = 1;
// var b = 2;
