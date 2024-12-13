function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
//Argument of type 'string' is not assignable to parameter of type 'Date'.
//that should be the error
//but the error is not showing in the console
//to fix this error we can use the below code
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
//We don't always have to write the types explicitly. 
//TypeScript can infer the types of variables and parameters.
//E.g.
var msg = "hello there!";
