//logical Operators

//Logical AND && : The logical AND operator returns true if both operands are true; otherwise, it returns false.

let a = 4
let b = 4 
let check = (a <= b) && (a == b)
console.log( check); //true

b = 3;
check = (a <= b) && (a == b)
console.log(check); //false



//Logical OR (||): The logical OR operator returns true if at least one of the operands is true; otherwise, it returns false.

let x = 3
let y = 4
let check2 = (x <= y) || (x ==y);
console.log(check2); // true      (return true : if at least one of the operands is true )


//Logical NOT (!): The logical NOT operator returns true if the operand is false, and vice versa.

let m = 5
let n = 8
let check3 = !(m > n) 

console.log(check3); //true

check3 = !(m < n); 
console.log(check3); //false