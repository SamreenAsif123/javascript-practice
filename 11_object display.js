// Create an Object
const person1 = {
    name: "John",
    age: 30,
    city: "New York",


}  
  

  document.getElementById("introduction").innerHTML = person1;  // display [object Object]

  //to to display JavaScript objects we using following methods :
//Displaying the Object Properties by name
//Displaying the Object Properties in a Loop
//Displaying the Object using Object.values()
//Displaying the Object using JSON.stringify()


//Displaying the Object Properties by name
const person2 = {
    name: prompt('whats your name?'),
    age: prompt ('whats your age?'),
    city: prompt('In which city  you live?'),
    emailAddress: prompt('whats your email address?'),
    intro : function (){
        return `Your name is ${this.name}. 
        your age is ${this.age}.
        you live in ${this.city}.
        your email address is ${this.emailAddress} `
    }
  };
  

  document.getElementById("intro").innerHTML =  person2.intro(); 



  //Displaying the Object using Object.values()

  // Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Create an Array
  const myArray = Object.values(person);
  
  // Display the Array
  document.getElementById("demo").innerHTML = myArray;






