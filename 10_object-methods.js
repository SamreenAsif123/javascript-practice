// an object method is a function that is associated with an object


// example 1

// Define an object
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    // Define a method inside the object
    start: function() {
      console.log("The car is starting...");
    }
  };
  
  // Calling the method using dot notation
  car.start(); // Output: The car is starting...
  


// example 2
  
// Define an object
  let car2 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
 
 // Define a method inside the object
     brake: function (){
        console.log(' braked...');
     }

  };

  car2.brake();


//   example 3

let person ={
    firstName : prompt('Write your first name'),
    lastName: prompt('Write your last name'),
    age : prompt ('Write your age here'),

    intro : function (){
        return `My name is ${this.firstName} ${this.lastName}. My age is ${this.age}`
    }
}

console.log (person.intro().toUpperCase());


