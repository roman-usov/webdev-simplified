const person = {
  name: "Kyle",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
};

let currentPerson = person;

while (currentPerson != null) {
  console.log(currentPerson.name);
  currentPerson = currentPerson.friend;
}

function printName(obj) {
  if (obj == null) return;
  console.log(obj.name);
  printName(obj.friend);
}

printName(person);

const number = 1;

function printNumber(num) {
  if (num > 3) return; // exit clause
  console.log(num);
  printNumber(num + 1);
  console.log("exit ", num);
}

printNumber(number);

/*

/// Top of the Callstack ///


| Input Value  | Exit Clause | Action Bfre Recursion | Recursion      | Up Route | Action Aftr Recursion | Exit | Down Route |
| num = 4      | true        | return                |                |     ->   |        ->             |  ->  | ->  |      |
|              |             |                       |                |          |        |     <-       <-     <-    ∇      |
                                                                            ∆             ∇
| num = 3      | false       | print 3               | printNumber(4) |     |    | console.log(exit 3)   |  ->  |  -> |      |
|              |             |                       |                |          |        |     <-       <-     <-    ∇      |
                                                                            ∆             ∇
| num = 2      | false       | print 2               | printNumber(3) |     |    | console.log(exit 2)   |  ->  |  -> |      |
|              |             |                       |                |          |        |     <-       <-     <-    ∇      |
                                                                            ∆             ∇
| num = 1      | false       | print 1               | printNumber(2) |     |    | console.log(exit 1)   |  ->  |     ->     | End

Start
* Read from the bottom line left to right, and follow the arrows

/// Bottom of the Callstack ///

*/

function sumNumbersBelow(num) {
  if (num <= 0) return 0;
  console.log(num);
  return num + sumNumbersBelow(num - 1);
}

sumNumbersBelow(2);

/*

/// Top of the Callstack ///


| Input Value  | Exit Clause | Action Bfre Recursion | Recursion      | Up Route | Action Aftr Recursion | Exit | Down Route |
| num = 0      | true        | return 0              |                |     ->   |        ->             |  ->  | ->  |      |
|              |             |                       |                |          |        |     <-       <-     <-    ∇      |
                                                                            ∆             ∇
| num = 1      | false       |                       | sumNumber(0)   |     |    | return 1 + 0          |  ->  |  -> |      |
|              |             |                       |                |          |        |     <-       <-     <-    ∇      |
                                                                            ∆             ∇
| num = 2      | false       |                       | sumNumber(1)   |     |    | return 2 + 1          |  ->  |     ->     | End

Start
* Read from the bottom line left to right, and follow the arrows

/// Bottom of the Callstack ///

*/
