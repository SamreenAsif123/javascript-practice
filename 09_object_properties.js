//Objects are variables too. But objects can contain many values.

let person = {
    name : 'john',
    age : '23',
    address : 'USA',
    degree : 'BS Biotech'
}

console.log(person['name'])// two ways to access the proeprties of an object 
console.log(person.age) //two ways to access the proeprties of an object 

//example 2

let person2 = {}

person2.name = 'Asif',
person2.age = '52',
person2.city = 'Karachi',

console.log(person2)



//example 3
//Create an Object
const person3 = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  // Create a copy
  const x = person3;
  
  // Change Age in both
  x.age = 10;
  console.log(x)


  //to  delete, delete keyword is used to delete a property from an object:

  let person4 = {
    name : 'Farwa',
    class : 'Intermediate',
    age : '20',
    Experience : ' 2 years'
  }
  console.log(person4)

  delete person4.Experience
  console.log(  person4)

