//comparison operators

 
//Equality
let a = 10;
let b = 20;

console.log(a==b); //false

b = 10;
console.log(a ==b); //true

let name1 = 'Samreen'
let name2 = 'sam'
console.log( name1 == name2); //false

name2 = 'Samreen'
console.log(name1 == name2); //true


//Strict Equality;

let age1 = 20;
let age2 =  23;

console.log(age1 === age2); //false

age2=20;
console.log(age1 === age2); //true

age2 = '20'
console.log(age1 === age2); //false because in strict equality data type should also be  same 


//In equality (not equal)

let a1 = 20;
let a2 = 30;
let a3 = a1 != a2; 

console.log(a3); //true

a2 = 20;
console.log(a1 != a2); //false 


// strict in equality (strict not equal)

 let b1 = 20;
 let b2 = 20;
let b3 = b1 !== b2; 

console.log(b3); //false

b2 = 30 ;
console.log(b1 !== b2); //true

b2 = '20';
console.log (b1 !== b2); //true because data type also matters here.



//greater than > and less than <
let marks1 = 23;
let marks2 = 29;
let compare =  marks1 < marks2 ;
console.log(marks1 < marks2) //true
console.log(marks1 > marks2); //false

//greater than and equal to >=  and less than and equal to  <=

marks2 = 23 
console.log (marks1 <= marks2) //true
console.log(marks1 >= marks2)//true