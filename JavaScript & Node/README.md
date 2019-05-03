
# JavaScript Basic Syntax and Info
* Is a highlevel interpreted programming language to make web pages interactive. 
    * Highlevel = a lot of abstraction. 
    * Interpreted = it can be run without a compiler. 
* JavaScript is dynamically typed (not static), which means we dont have to spesify data types. 
* JavaScript conforms to ECMAScript. 
* JavaScript is a scripting language and lightweight. 
* JavaScript can be run:
    * On the client/browser (Frontend). 
    * A server using Node.js (Backend).
    * For mobile developmenet with React Native. 
    * For desktop applications with Electron JS. 



# Connecting HTML and JavaScript
* There are two main ways to use JavaScript with HTML. 
    * Put JavaScript code in a seperate ".js" file (Recomended).
      * This is done within the \<header> section.  
    * Put javaScript inside the HTML code using \<script>.     
      * This is done within the \<body> section. 

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
We can print to the browser developer tool with the console.log, console.error, console.warning command. 
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



# Variables
We have three varaible types in JavaScript:
* **var** (old): var is globally scoped, its old and we should try to avoid using it. 
* **let** (Added with ES6): let defines a variable that can be reassigned later. 
* **const** (Added with ES6): const defines a constant. This should allways be used unless we want to reassign the value. 



# What is ES6?
* ES6 is also known as "ECMAScript 6", "ECMAScript 2015", and "JavaScript 6".
* ES6 gave a lot of new functionality such as:
  * let and const
  * Exponentiation (pow) operator (\*\*)
  * Default parameter values
  * Array.find()
  * Array.findIndex()


# Use Strict
We can force JavaScript to throw exceptions by adding "use strct" on top of the script. 
It can also be added on top of a function to make just that function comply to the strict mode. 
```
"use strict"
```
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
* **null** / **undefined**: null and undefined are both are used to represent the absence of some value. 
```
let x = null
let y = undefined
```
* **Symbol**: Symbols are completely unique identifiers with static properties (similar to ENUM). 

<br>

We can use **typeof** to get the type: 
```
console.log(typeof age)
```



# Loops

### For Loop
```
for (let i = 0; i < 10; i++){
    ...code...
}
```

### Foreach Loop (approach 1)
This approach is similar to enumerate in Pyhton. 
```
for (let [key, value] of myObject.entries()) {
  ...code...
}
```

### Foreach Loop (approach 2)
"key" is the index in myArray. The value can be accessed with myArray[key]. 
In other words, this for-each loop loops over the keys, not the values. 
```
for (let key in myObject) {
  ...code... 
}
```

### Foreach Loop (approach 3)
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



# If Statement
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
let myCondition = age >= 18 ? "Underage" : "Legal"
```



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
let addTen = function() {
  return x + 10
}

addTen(5) // Returns 15
```

### Arrow function (approach 3)
```
let addTen = () => {
  return x + 10
}

addTen(5) // Returns 15
```

### Function (approach 4)
This approach is used for 
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

# Destructural syntax as input parameters in Function
We can specify what elements to use from the input Object. 
This is normally used with JSON calls / API calls.
```
function myFunction5({ firstName, lastName, age}) {
  ...code...
}
```



# Object 

### Create Object
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

### Create Reusable Object
let Person = function(name, age) {
  this.name = name
  this.age = age
}
let bob = new Person("Bob", 50)

### Create Object without spesifying keys
```
const age = 25
const name = "Bob"
const myObject = { age , name}
```

### Add item to Object
```
person.email = "BobSmith@gmail.com"
```
```
person['email2'] = "BobSmith@mail.com"
```

### Object Destructuring
Instead of getting values from objects one by one:
* const fName = person.firstName
* const lName = person.lastName
We can use destructing assignment: 
```
const { firstName, lastName } = person
```



# Arrays 
Arrays in JavaScript are **Object** with numberic keys that correspond to a value. 
Arrays have all the functionality of an Object in addition to extended functionallity such as Push, Splice, and Length. 
<br>
There are two main ways of initializing an Array (with "new" or with bracket notation):
```
const numbers = new Array(5,3,"Hello",2)
```
```
const numbers2 = [5,3,"Hello",2]
```

### Adding & Removing elements in Arrays
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

### Array Mutation & Object.freeze
Arrays that are declated as "const can still be mutated using bracket notation. 
```
const myArray = [1,2,3]
myArray[1] = 10
```
<br>
Object.freeze can be used to freeze the state of an object in JavaScript.
Object.freeze works on object values by making the object immutable, i.e. you cannot change its properties. 
```
const myArray = [1,2,3]
let myFreezedArray = Object.freeze(myArray)
myFreezedArray[1] = 10 // This will crash if "use strict" is enabled, else it has no effect. 
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
let myValue = myNumbers.<strong>find</strong>(myFunction) // myValue is 26 // TODO strong?
```
<br>
The **findIndex** is exactly the same as the **find** function, but findIndex returns the index instead of the element:
```
function myFunction(value, index, array) {
  return value > 18
}

let myNumbers = [2, 10, 15, 26, 42]
let myIndex = myNumbers.<strong>findIndex</strong>(myFunction) // myIndex is 3
```



# spread operator = ...
Takes an array and spread array
```
const myArray = [1,2,3]
const myArrayCopy = [...myArray] // This will copy myArray.
```



# Classes

### Create class (approach 1)
```
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

let bob = new Person("Bob", 50)
```

# Create class (Constructor Patterns) (approach 2)
```
function Employee(name, age){
  this.name = name
  this.age = age
}

let bob = new Person("Bob", 50)
```











# JSON
Convert object to JSON. 
```
const myJSON = JSON.stringify(person)
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










# OOP



# DOM Selection & Manupulation



# Events 



# Form Validation




# Map, Filter, Reduce
```
["duck", "cat", "goat"].filter(x => x.length > 3); 
// Returns ["duck", "goat"] since these elements have a length more than 3. 
```




# TODO SORT:

Anonymous function: A function can be assigned to a variable. 

Import vs require: 

search for TODO

