//Explcit Types

// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   }

  // what we did was add type annotations on person and date
  // to describe what types of values greet can be called with
  // You can read that signature as "greet takes a person of type string, and a date of type Date"

  //with this, TS can tell us about other cases where greet might be called incorrectly

  //E.g.

//   function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   }
   
//   greet("Maddison", Date());

  //TS reported an error on our second argument to greet
  //Calling Date() returns a string representing the current date and time
  //On the other hand, constructing a new Date() actually gives us what we were expecting
  //So, we can fix it up like this:

//   function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   }
   
//   greet("Maddison", new Date());

  //remember that we don't always have to write the types explicitly
  //TS can infer the types of variables and parameters
  //Even though we didn't tell TS that msg was a string, 
  // it could infer it from the value we assigned to it ("hello there!")
  //to check it out, go to the JS file and run it!
  //It should output: Hello Maddison, today is Thu Dec 12 2024!


  //Erased Types

  "use strict";
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());

//Notice two things:
//1. Our person and date parameters no longer have type annotations
//2. Our "template string" uses the same backticks as before, but now uses the concat method to concatenate strings

//Type annotations are part of JS, so there really aren't any browsers or other runtimes that can just run TS unmodified
