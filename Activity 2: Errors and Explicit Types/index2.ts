// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   }

//   greet("Maddison", new Date());

//   //Argument of type 'string' is not assignable to parameter of type 'Date'.
//   //that should be the error
//   //but the error is not showing in the console

//   //to fix this error we can use the below code
//   function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   }
   
//   greet("Maddison", new Date());

//   //We don't always have to write the types explicitly. 
//   //TypeScript can infer the types of variables and parameters.

// //E.g.
// let msg = "hello there!";
// // Even though we didn't explicitly write the type of the variable msg, 
// // TypeScript inferred it as string.