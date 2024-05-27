// a function is a block of reusable code that performs a specific task


// Function Expression
//A function expression defines a function as part of an expression.
//It can be stored in a variable, passed as an argument, or returned from another function.

// Example
let greet = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet ('Samreen')) // Hello,Samreen !




//Arrow Functions (ES6): Arrow functions provide a more concise syntax for defining functions.
//They are defined using the arrow (=>) syntax.

let greeting =(name) =>  {
    return "Hello, " + name + "!";
};
console.log(greet ('Sara')) // Hello,Samreen !


//Another example.
//Check Eligibility Criteria for job
let name = prompt('please enter your name')
let age = prompt ('please enter your age')
let experience = prompt ('How much experience you have in this job?');

function eligibleforJob (name , age , experience ){
  if ( age >= 25 && experience >= 4) {
        return name + ' hurry ! you are eligible for this job. '
    } else {
          return name + '  sorry you are not eligible for this job.'
    }
}

let  checkEligibilityCriteria = eligibleforJob(name, age, experience)

console.log(checkEligibilityCriteria)
 


