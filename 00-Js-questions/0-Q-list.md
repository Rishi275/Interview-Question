# 1. What is Hoisting
# 2. Difference between “ == “ and “ === “ operators
# 3. Difference between var and let keyword in javascript.
---Some differences are 
From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.
The keyword 'Var' has a function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.
In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

# 4. Explain Implicit Type Coercion in javascript.
----Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

String coercion
String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.
   
# 5. What is NaN property in JavaScript?
NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.
typeof of NaN will return a Number.
To check if a value is NaN, we use the isNaN() function,

isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true


# 6. What is an Immediately Invoked Function in JavaScript?
An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

Syntax of IIFE :

(function(){ 
  // Do something;
})();


# 7. Explain Higher Order Functions in javascript.
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

Higher-order functions are a result of functions being first-class citizens in javascript.

Examples of higher-order functions:

function higherOrder(fn) {
  fn();
}
   
higherOrder(function() { console.log("Hello world") });  
function higherOrder2() {
  return function() {
    return "Do something";
  }
}      
var x = higherOrder2();
x()   // Returns "Do something"


# 8. Explain “this” keyword.
The “this” keyword refers to the object that the function is a property of.

The value of the “this” keyword will always depend on the object that is invoking the function.\

Confused? Let’s understand the above statements by examples:

function doSomething() {
  console.log(this);
}
   
doSomething();
What do you think the output of the above code will be?
Note - Observe the line where we are invoking the function.

Check the definition again:

The “this” keyword refers to the object that the function is a property of.
In the above code, #the function is a property of which object?

Since the function is invoked in the global context, the function is a property of the global object.

Therefore, the output of the above code will be the global object. Since we ran the above code inside the browser, the global object is the window object.

Example 2:

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
   
obj.getName();
In the above code, at the time of invocation, the getName function is a property of the object obj , therefore, this keyword will refer to the object obj, and hence the output will be “vivek”.
# 9. What do you mean by Self Invoking Functions?
Without being requested, a self-invoking expression is automatically invoked (initiated). If a function expression is followed by (), it will execute automatically. A function declaration cannot be invoked by itself.

Normally, we declare a function and call it, however, anonymous functions may be used to run a function automatically when it is described and will not be called again. And there is no name for these kinds of functions.

# 10. Explain call(), apply() and, bind() methods.
1. call():

It’s a predefined method in javascript.
This method invokes a method (function) by specifying the owner object.
Example 1:
function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        
sayHello.call(obj);
        
// Returns "Hello Sandy"	
call() method allows an object to use the method (function) of another object.
Example 2:
var person = {
  age: 23,
  getAge: function(){
    return this.age;
  }
}        
var person2 = {age:  54};
person.getAge.call(person2);      
// Returns 54  
call() accepts arguments:
function saySomething(message){
  return this.name + " is " + message;
}     
var person4 = {name:  "John"};     
saySomething.call(person4, "awesome");
// Returns "John is awesome"    
apply()

The apply method is similar to the call() method. The only difference is that,

call() method takes arguments separately whereas, apply() method takes arguments as an array.

function saySomething(message){
  return this.name + " is " + message;
}        
var person4 = {name:  "John"};
saySomething.apply(person4, ["awesome"]);
2. bind():

This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
Example with arguments:
var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
   
var person1 = {name:  "Vivek"};
     
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
      
// Binds the displayDetails function to the person1 object
        
      
detailsOfPerson1();
//Returns Vivek, bike details: TS0122, Bullet
# 11. What is the difference between exec () and test () methods in javascript?
test () and exec () are RegExp expression methods used in javascript. 
We'll use exec () to search a string for a specific pattern, and if it finds it, it'll return the pattern directly; else, it'll return an 'empty' result.
We will use a test () to find a string for a specific pattern. It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false'.


# 12. What is currying in JavaScript?
Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.

Example of a curried function:

function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4) 


# 13. Explain Scope and Scope Chain in javascript.
# 14. Explain Closures in JavaScript.
# 15. What are object prototypes?

# 16. What are object prototypes?
All javascript objects inherit properties from a prototype. For example,

Date objects inherit properties from the Date prototype
Math objects inherit properties from the Math prototype
Array objects inherit properties from the Array prototype.
On top of the chain is Object.prototype. Every prototype inherits properties and methods from the Object.prototype.
A prototype is a blueprint of an object. The prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.
Let’s see prototypes help us use methods and properties:

# 17. What are the types of errors in javascript?
There are two types of errors in javascript.

Syntax error: Syntax errors are mistakes or spelling problems in the code that cause the program to not execute at all or to stop running halfway through. Error messages are usually supplied as well.
Logical error: Reasoning mistakes occur when the syntax is proper but the logic or program is incorrect. The application executes without problems in this case. However, the output findings are inaccurate. These are sometimes more difficult to correct than syntax issues since these applications do not display error signals for logic faults


# 18. Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.
Let’s understand memoization, by converting a simple function to a memoized function:

Note- Memoization is used for expensive function calls but in the following example, we are considering a simple function for understanding the concept of memoization better.

Consider the following function:

function addTo256(num){
  return num + 256;
}
addTo256(20); // Returns 276
addTo256(40); // Returns 296
addTo256(20); // Returns 276
In the code above, we have written a function that adds the parameter to 256 and returns it.

# 27. What is the use of a constructor function in javascript?
Constructor functions are used to create objects in javascript.

When do we use constructor functions?

If we want to create multiple objects having similar properties and methods, constructor functions are used.

Note- The name of a constructor function should always be written in Pascal Notation: every word should start with a capital letter.
Example:

function Person(name,age,gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}


var person1 = new Person("Vivek", 76, "male");
console.log(person1);

var person2 = new Person("Courtney", 34, "female");
console.log(person2);
In the code above, we have created a constructor function named Person. Whenever we want to create a new object of the type Person, We need to create it using the new keyword:

var person3 = new Person("Lilly", 17, "female");
The above line of code will create a new object of the type Person. Constructor functions allow us to group similar objects.


# 2. Difference between “ == “ and “ === “ operators
# 2. Difference between “ == “ and “ === “ operators