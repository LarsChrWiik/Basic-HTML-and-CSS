
# Table of Contents  
  
[JavaScript](#JavaScript)

[Run JavaScript code](#Run-JavaScript-code)

[Browser Console](#Browser-Console)

[What is ES6?](#What-is-ES6)

[Variables](#Variables)

[Use Strict](#Use-Strict)

[Primitive Data Types](#Primitive-Data-Types)

[Typeof](#Typeof)

[Type Conversion](#Type-Conversion)

[Loops](#Loops)

[If Statement / Conditionals](#If-Statement--Conditionals)

[Switch Sentence](#Switch-Sentence)

[Function](#Function)

[Object / Class](#Object--Class)

[Array](#Array)

[JSON and JSON.stringify](#JSON-and-JSONstringify)

[DOM Selection & Manupulation](#DOM-Selection--Manupulation)

[Map, Filter, Reduce](#Map-Filter-Reduce)

[Good to know](#Good-to-know)

[TODO SORT:](#TODO-SORT)



# JavaScript
* JavaScript is a programming language to make web pages interactive. 
* JavaScript is highlevel, interpreted, and dynamically typed: 
    * Highlevel = a lot of abstraction. 
    * Interpreted = it can be run without a compiler. 
    * Dynamically typed = does type checking at run-time as opposed to compile-time (statically typed).
* JavaScript is dynamically typed (not static), which means we dont have to specify data types. 
* JavaScript conforms to ECMAScript. 
* JavaScript is a scripting language and lightweight. 
* JavaScript can be run:
    * On the client/browser (**Frontend**). 
    * A server using Node.js (**Backend**).
    * For mobile developmenet with React Native. 
    * For desktop applications with Electron JS. 



# Run JavaScript Code

### JavaScript \<script> with HTML
* There are two main ways to use JavaScript with HTML: 
    1. Put JavaScript code in a seperate ".js" file (**Recomended**).  
    2. Put javaScript inside the HTML code using \<script>. 

Example using "\<Script>":
```
<body>
  <script>
    let x = 10
    console.log(x)
  </script>
</body>
```

Example of refering to an external ".js" file. 
```
<header>
  <script src="main.js"><script>
</header>
```

### Using Node.js
A JavaScript file can be run using Node.js from the terminal by running the command:
```
node myJsFile.js
```



# Browser Console
We can print to the browser developer tool with the **console.log**, **console.error**, **console.warning** command. 
```
console.log("Hello World")
console.error("This is an error")
console.warn("This is a warning")
```

We can also measure time taken using **console.time()** and **console.timeEnd()**. 



### Printing Variables
```
console.log("my name is " + name + " and I am " + " age years old")
```
```
console.log(`my name is ${name} and I am ${age} years old`) // Must be ` nor " or '. 
```



# What is ES6?
http://es6-features.org/#CurrencyFormatting
* ES6 is also known as "**ECMAScript 6**", "**ECMAScript 2015**", and "**JavaScript 6**".
* ES6 gave a lot of new functionality such as:
  * let and const
  * Exponentiation operator "\*\*" (same as the "pow" function) 
  * Default parameter values
  * Array.find()
  * Array.findIndex()
  * The class keyword



# Variables
We have three variable types in JavaScript:
* **var** (old): var is globally scoped, its old and we should avoid using it. 
* **let** (Added with ES6): let defines a variable that can be reassigned later. 
* **const** (Added with ES6): const defines a constant. This should allways be used unless we want to reassign the value. 



# Use Strict
We can force JavaScript to throw exceptions by adding **"use strct"** on top of the script. 
```
"use strict"
```
It can also be added on top of a function to make just that function comply to the strict mode. 
```
function myFunction() {
  "use strict"
  x = 10 // This with cause an error since x is not declared. 
}
```


# Primitive Data Types
* **String**: Strings are immutable, which means that we cannot replace a single character with a new character.
```
const name = "Mark Zuckerberg"
```
* **Number**: There is no "float" of "integer" in JavaScript. Number can be **NaN**, which means **Not A Number**. 
```
const age = 34
```
```
const pi = 3.141592
```
* **Boolean**: Either "true" or "false". 
```
isNice = true
```
* **null** / **undefined**: null and undefined are both used to represent the absence of some value. 
```
let x = null
let y = undefined
```
* **Symbol**: Symbols are completely unique identifiers with static properties (similar to ENUM). 

It is also possible to initialize String, Number and Boolean as objects: 
```
const myString = new String("Mark Zuckerberg")
```
```
const myNumber = new Number(100)
```
```
const myBoolean = new Boolean(true)
```

However, initializing primitive types with **new** is not recomended, since **===** compares using the data type. 



# Typeof
We can use **typeof** to get the type of the input in JavaScript: 
```
console.log(typeof(age))
```
| Command  | Returns |
|------|--------|
| typeof("Bob") | string |
| typeof(3.14) | number |
| typeof(NaN) | number |
| typeof(false) | boolean |
| typeof([1,2,3,4]) | object |
| typeof({name:'Bob', age:50}) | object |
| typeof(new Date()) | object |
| typeof(function () {}) | function |
| typeof(myUndefinedVariable) | undefined |
| typeof(null) | object |

However, we can check the type of the constructor of the object to get the function it contains:

| Command  | Returns |
|------|--------|
| typeof([1,2,3,4].constructor) | function Array() |



# Type Conversion

### Convert String to Integer:
```
const myString = "42"
const myInt = Number(myString)
```
Can also use **ParseInt()** and **ParseFloat**.

### Convert Integer to String:
```
const myNum = 15
const myNewString = myNum.toString()
```
Or
```
const myNum = 15
const myNreString = String(myNum)
```

### Convert String to Boolean:
```
const myBool = myValue === 'true'
```



# Loops

### For Loop
```
for (let i = 0; i < 10; i++){
    ...code...
}
```

### Foreach Loop (approach 1)
**v** is the value in myArray. 
```
for (let v of myArray) {
  console.log(v)
}
```

### Foreach Loop (approach 2)
**i** is the index in myArray. The value can be accessed with myArray[key]. 
```
for (let i in myObject) {
  ...code... 
}
```

### Foreach Loop (approach 3)
This approach is similar to enumerate in Pyhton. 
```
for (let [key, value] of myObject.entries()) {
  ...code...
}
```

### Foreach Loop (approach 4)
```
myObject.forEach(function(x){
    ...code...
})
```

### While Loop
```
let i = 0
while (i < 10){
    ...code...
    i++
}
```

### Do While Loop
```
let i = 0
do {
   ...code...
   i++
} while (x < 10)
```



# If Statement / Conditionals
```
if (age1 == 18 && age2 != 18 || age3 == 20) {
    ...code...
} else if (age === "23") {
    ...code...
} else {
    ...code...
}
```
Oneline if-else sentence. 
```
let age = 17
let myCondition = age >= 18 ? "You are of legal age" : "You are underage"
```

### == vs ===
Double equalsign (==) is used to compare values and disregard datatype. 
Tripple equalsign is used when we want to compare datatypes as well. 



# Switch Sentence
```
switch (age) {
    case 17:
        ...code...
        break
    case 23:
        ...code...
        break
    default:
        ...code...
        break
}
```



# Function

### Standard Function (approach 1)
```
function addTen(x) {
  return x + 10
}

addTen(5) // Returns 15
```

### Function Expression / Anonymous Function (approach 2)
```
let addTen = function(x) {
  return x + 10
}

addTen(5) // Returns 15
```

### Arrow function (approach 3)
```
let addTen = (x) => {
  return x + 10
}

addTen(5) // Returns 15
```

### Short Arrow Function (approach 4)
```
let addTen = (x) => x + 10

addTen(5) // Returns 15
```

### Function with default value
```
function addTen(x=0) {
  return x + 10
}
```

### Function with n arguments
```
function addNumbers(...args) {
  ...code...
}
```

### Function return with condition
```
function ifExists(key, array) {
   return array[key] || "No such item in array"
}
```

### Function with imidiate execution (Lambda function)
```
(() console.log("this is a function"))()
```
```
((x) => x**2)(3) // This will return 9
```

### Function Argument Destructuring
We can specify what elements to use from the input Object. 
Argument Destructuring is often used with JSON calls / API calls.
```
function myFunction5({ firstName, lastName, age}) {
  ...code...
}
```



# Object / Class
Classes, Arrays, and Functions are all objects. 
Essentially, everything in JavaSCript is an object except for the primitive data types. 
JavaScript is a **prototypal object oriented language**, meaning that objects directly inherit from other objects. 

Functions within objects that uses the **class** keyword are automatically put in the **prototype**. 
This ensures that all instances of the object-type shares the same instance of the function-object. 
This is more efficient, compared to having the function within the object itself (like the constructor pattern), since it is then replicated for all instances of the object. 

### Class Pattern Object (E6)
When using the class pattern object, all future instances of the object **will share the same instaces of the internal functions** since it is stored within the **prototype**. 
```
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  myFunction() {
    ...code...
  }
  static myOtherFunction() {
    ...code...
  }
}

let bob = new Person("Bob", 50)
```

### Constructor Pattern Object (E5)
When using the constructor pattern object, all future instances of the object **will create its own instace of the internal functions** since it is not stored within the **prototype**. 
```
function Person(name, age){
  this.name = name
  this.age = age
  
  this.myFunction = function() {
    ...code...
  }
}

let bob = new Person("Bob", 50)
```
To share the same function for every Person objects, we can add functions to the **protptype** manually. 
```
let Person = function(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.getAge = function() {
  return this.age
}

let bob = new Person("Bob", 50)
```

### Create Non-Reusable Object
Object literals are key-value pairs. Nested objects is allowed. 
```
let person = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 50,
    childeren: ['John', 'Emily'],
    address: {
        street: 'Charles Street',
        city: 'Boston'
    },
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}
```

### Object Destructuring
Instead of getting values from objects one by one:
```
const fName = person.firstName
const lName = person.lastName
```
We can use **destructuring assignment**: 
```
const { firstName, lastName } = person
```

### Making an object inmutable (Object.freeze)
**Object.freeze** can be used to freeze the state of an object in JavaScript by making it immutable, i.e. you cannot change its properties. This also applies for Arrays, since an Array is an object. 
```
let myFreezedObject = Object.freeze(myObject)
```

### Class Object Inheritance
```
class Customer extends Person {
  constructor(name, age, customerID) {
    super(name, age)
    this.customerID = customerID
  }
}
```


# Array
An Array in JavaScript is an object with numberic keys that correspond to a value. 
However, an Array has extended functionallity, compared to an Object, with functions such as Push, Splice, and Length. 

There are two main ways of initializing an Array. 
Initializing the Array as an object:
```
const numbers = new Array(5,3,"Hello",2)
```
Or using the bracket [] notaiton:
```
const numbers2 = [5,3,"Hello",2]
```

### Add / Remove elements in an Array
| Command  | Description |
|------|--------|
| push | add to end |
| pop | remove last |
| shift | remove first |
| unshift | add to front |
| splice | cut items from given possitions |

```
const myArray = [5,3,"Hello"]

numbers.push(100)
let myNum = myArray.pop()
let myNum2 = myArray.shift()
numbers.unshift(150)
let myArraySubset = myArray.splice(1,2) // takes all elements from position 1 to and including possition 2. 
```

### Array Mutation
Arrays that are declated as "**const**" can still be mutated using bracket notation. 
```
const myArray = [1,2,3]
myArray[1] = 10
```

### Array.length
```
const myArray = [5,3,4,2,1]
let myLength = myArray.length
```

### Array.sort()
Array.sort sorts alphabetically by default, which means that [35,5,100,2] will be sorted [100,2,35,5] since it treats numbers as strings. 
```
myArray.sort()
```

A sort function can be added to compare elements. 
```
function sortNumber(a,b) {
  return a - b
}

let numArray = [35,5,100,2]
numArray.sort(sortNumber) // numArray is [2,5,35,100]
```

This can be written with arrow notation:
```
let numArray = [35,5,100,2]
numArray.sort((a,b) => a - b) // numArray is [2,5,35,100]
```

### Array.find() and Array.findIndex()
The **find** function returns the first element in an Array that satisfies a condition from a given function. 
The function requires three arguments: 
* value
* index
* array
```
function myFunction(value, index, array) {
  return value > 18
}

let myNumbers = [2, 10, 15, 26, 42]
let myValue = myNumbers.find(myFunction) // myValue is 26
```

The **findIndex** is exactly the same as the **find** function, but findIndex returns the index instead of the element:
```
function myFunction(value, index, array) {
  return value > 18
}

let myNumbers = [2, 10, 15, 26, 42]
let myIndex = myNumbers.findIndex(myFunction) // myIndex is 3
```

### Spread operator
The spread operation "..." is used to convert an array of elements into several individual elements. An example is that it converts ([1,2,3]) to (1,2,3). 
This has several use cases such as copying arrays, concatinating arrays, destructuring, and spreading the elements in an array to use them as function parameters instead of the array itself. 
```
const myArray = [1,2,3]
const myArrayCopy = [...myArray] // This will copy myArray.
```



# JSON and JSON.stringify
JSON is a data format that are used alot in fullstack development. 
The format is very similar to an object, but all keys have double quotes. 
Example: 
```
{
  {
    "id": 1,
    "firstName": "bob"
  },
  {
    "id": 2,
    "firstName": "John"
  }
}
```
An Object can be converted to JSON format with the JSON.stringify() function:
```
const myObjects = [
  {
    id: 1,
    firstName: "bob"
  },
  {
    id: 2,
    firstName: "John"
  }
]

const myObjectsJSON = JSON.stringify(myObjects)
// myObjectsJSON = [{"id":1,"firstName":"bob"},{"id":2,"firstName":"John"}]
```



# Map, Filter, Reduce

### Map
Apply function on each element within an object. 
```
const myArray = [3,4,5]
const newArray = myArray.map(function(x){
  return x**2
}) // [9, 16, 25]
```
We can also use map with the arrow notaiton: 
```
const myArray = [3,4,5]
const newArray = myArray.map(x => x**2) // [9, 16, 25]
```

### Filter
Filter object based on condition. 
```
const myArray = [3,4,5]
const newArray = myArray.filter(function(x){
  return x**2 > 10
})
```
We can also use filter with the arrow notation: 
```
const myArray = [3,4,5]
const newArray = myArray.filter(x => x**2 > 10)
```

### Reduce
Reduce will reduce the object into a single value. **acc** is the accumulator, while **x** is the value within the input object. 
```
const myArray = [3,4,5]
const accStart = 0
const myReducedValue = myArray.reduce(function (acc, x) {
  return acc + x
}, accStart) // Reduced to 12
```
We can also use Reduce with the arrow notation: 
```
const myArray = [3,4,5]
const accStart = 0
const myReducedValue = myArray.reduce((acc, x) => acc + x, accStart)
```



# Module system (Import and export modules)
The main way to import and export JavaScript files in Node.js is by using the **require** statement and the **modules.export** statement. 

Another way of sharing modules were introduced in ES6 with the satements **import** and **export** / **export defaults**. However, the traditional *require* statement is still prefered. 


## Require / Modules.export (Standard)
```
// Define function in another file (otherJsFile.js)
exports.addOne = function (x) {
  return x + 1
}
```
```
// Import the function using require. 
const functionsFromFile = require('./otherJsFile.js');
const myVal = functionsFromFile.addOne(10) // myVal is 11. 
```

## Import (Added in ES6)
This is in experimentation stages.

```
// Define function in another file (otherJsFile.mjs)
function addOne(x) {
    return x + 1
}

export { addOne }
```

```
// Import the function using import from ES6. 
import { addOne } from "./otherJsFile.mjs"
const myVal = addOne(10) // myVal is 11
```



## Import JQuery in HTML vs Modern Node
Old way of importing JQuery the traditional way:
```
<script type="text/javascript" src="jQuery.js"></script>
```

Modern way of importing JQuery:
```
import jQuery from “jQuery”;
```

*npm update* can be used to update the modules when using *import*. This is much better than updating the html code maually. 










# Good to know

### Quotes within Stirng
```
let myString2 = "my quote is \"I love quotes\"."
let myString3 = 'my quote is "I love quotes".'
```

## Print number of Decimals
```
const myNum = 3.141592
const myDecimal = myNum.toFixed(2) // myDecimal is 3.14
```

## Not possible to set parameter types
It is not possible to set parameter types in JavaScript since it is not a statically types language. 

## .MJS files
*.mjs* is an extension name for EcmaScript modules. It can be used for example to use the ES6 import functionallity. 





# TODO:
* Import vs require: 
* Promise 
* Fetch

* Define
```
define('myJsFile.js', function () {
  return "This is what is returned!"
})
```
