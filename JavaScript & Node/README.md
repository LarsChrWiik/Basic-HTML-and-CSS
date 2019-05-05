
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



# Using JavaScript with HTML
* There are two main ways to use JavaScript with HTML: 
    1. Put JavaScript code in a seperate ".js" file (**Recomended**).  
    2. Put javaScript inside the HTML code using \<script>. 

Example using "<Script>":
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



# Printing to browser Console
We can print to the browser developer tool with the **console.log**, **console.error**, **console.warning** command. 
```
console.log("Hello World")
console.error("This is an error")
console.warn("This is a warning")
```

### Printing Variables
```
console.log("my name is " + name + " and I am " + " age years old")
```
```
console.log(`my name is ${name} and I am ${age} years old`) // Must be ` nor " or '. 
```



# What is ES6?
* ES6 is also known as "**ECMAScript 6**", "**ECMAScript 2015**", and "**JavaScript 6**".
* ES6 gave a lot of new functionality such as:
  * let and const
  * Exponentiation operator "\*\*" (same as the "pow" function) 
  * Default parameter values
  * Array.find()
  * Array.findIndex()



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
* **Number**: There is no "float" of "integer" in JavaScript. 
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

However, we can check the type of the constructor of the object to find what of function it contains:

| Command  | Returns |
|------|--------|
| [1,2,3,4].constructor | function Array() |




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

### Function Expression (approach 2)
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

### Function Argument Destructuring
We can specify what elements to use from the input Object. 
Argument Destructuring is often used with JSON calls / API calls.
```
function myFunction5({ firstName, lastName, age}) {
  ...code...
}
```



# Object / Classes
Classes, Arrays, and Functions are all objects. 
Essentially, everything in JavaSCript is an object except for the primitive data types. 
JavaScript is a **prototypal object oriented language**, meaning that objects directly inherit from other objects. 

Functions within objects that uses the **class** keyword are automatically put in the **prototype**. 
This ensures that all instances of the object-type shares the same instance of the function-object. 
This is more efficient, compared to having the function within the object itself (like the constructor pattern), since it is then replicated for all instances of the object. 

### Class Pattern Object
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
}

let bob = new Person("Bob", 50)
```

### Constructor Pattern Object
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

### Create Non-Reusable Object without spesifying Keys
```
const age = 25
const name = "Bob"
const myObject = { age , name}
```

### Add item to Object
There are two ways of adding an item to an object. 
```
person.email = "BobSmith@gmail.com"
```
```
person['email2'] = "BobSmith@mail.com"
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

```
const numbers = [5,3,"Hello"]

numbers.push(100)
let myNum = numbers.pop()
let myNum2 = numbers.shift()
numbers.unshift(150)
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
```
myArray.sort()
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





# Type conversion // TODO
```
let myString = "42"
let myInt = parseInt(myString)
```








# Good to know

### Quotes within Stirng
```
let myString2 = "my quote is \"I love quotes\"."
let myString3 = 'my quote is "I love quotes".'
```

### Null
Null is actually defined as an object. 








# DOM Selection & Manupulation
DOM = Document Object Model. The DOM is basically the user interface. 
**window** is the parent object of the browser view. 
**document** is inside window.

### Single element selectors:
New way
```
document.querySelector(".myId")
```
Old way
```
document.getElementById("myId")
```

### Multi element selectors:
New way
```
document.querySelectorAll(".item") // return a NodeList. 
```
Old way
```
document.getElementByClassName("item") // return a HTMLCollection. 
```
```
document.getElementByTagName("item") // return a HTMLCollection. 
```

### Example of Event Listner
```
const eventType = "click" // There are several event types. 
const btn = document.querySelector('.myBtnId')
btn.addEventListener(eventType, function(x) {
  const elementThatWasClicked = e.target
  console.log('I clicked on' + elementThatWasClicked)
})
```

### Example of Adding a class to a HTML item
```
document.querySelector('.myId').classList.add('myCSS_Class')
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





# TODO SORT:

Anonymous function: A function can be assigned to a variable. 

Import vs require: 

search for TODO

