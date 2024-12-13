//Downleveling
// `Hello ${person}, today is ${date.toDateString()}!`;
//Why was it rewritted in our JS file as:
//"Hello ".concat(person, ", today is ").concat(date.toDateString(), "!");
//Template strings are a feature from a version of ECMAScript called ECMAScript 2015 (a.k.a. ECMAScript 6, ES2015, ES6, etc. - don’t ask).
//TypeScript has the ability to rewrite code from newer versions of ECMAScript to older ones such as ECMAScript 3 or ECMAScript 5 (a.k.a. ES5). 
//This is called downleveling.
//By default, TypeScript downlevels template strings to ES3, 
// which doesn’t support template strings.
//Running with --target es2015 changes TypeScript to target ECMAScript 2015, 
// meaning code should be able to run wherever ECMAScript 2015 is supported. 
// So running tsc --target es2015 hello.ts gives us the following output:
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
