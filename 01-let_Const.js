//Let and const both can be used to declare a variable but their is some differnce between them

//let:
//Variables declared with let can be reassigned.
//They have block scope, meaning they are only accessible within the block they are declared in.
//let is useful when you need to reassign values to a variable or when the variable's value will change over time.


//block scope
{
  let message = " how are you?";
}

console.log(`Hello Sara ${message}`); // error

//reassign value:

let name = 'Sara'
    name = 'Ahmed'

    console.log (`Hello ${name} How are you doing`)  // print Ahmed 

//const:

//Variables declared with const cannot be reassigned.
//They also have block scope like let.
//const is useful when you want to declare a variable whose value won't change throughout the program.



//block scope
{
  const name = "sara";
}

console.log(`hello ${name} how are you ?`); //error

//reassign vale:
const age = 20;
     age = 21;
    console.log (age); //error because we cannot assign value here . we can declare variable with const when their is no need to chane the value throughout the program.


