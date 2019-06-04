
# DOM Selection & Manupulation
**DOM** = Document Object Model. 
The DOM is basically the user interface. 
JavaScript can use the HTML DOM to access and change all the elements of an HTML document.



# DOM vs JQuery '$'
JQuery has long been used to support DOM manipulation, but recent updates has made **JQuery less relevant** since several of the features that where unique in JQuery is now part of vanilla JavaScript. 



# DOM Tree
**window** is the parent object of the browser view. 
The window object is **this** in JavaScript. 

**document** is the entire HTML code, which is basicly the entire web page.
*document* is inside *window*. 

### Traversing the DOM
```
const myElem = document.querySelector(".myId").firstChild
```
```
const myElem = document.querySelector(".myId").parentNode
```

<br>
<img src="images/traversing_the_DOM.png" width="500">
<br>



# Methods in the DOM

### Single element selectors:
Recommended way
```
document.querySelector(".myId")
```
Old way
```
document.getElementById("myId")
```

### Multi element selectors:
Recommended way

This can be used for both classes and tags. 
```
document.querySelectorAll(".item") // return a NodeList. 
```
Old way
```
document.getElementByClassName("myClassName")
```
```
document.getElementByTagName("myTagName")
```

### Stacking Selectors
```
const myItems = document.querySelector("ul").querySelectorAll(".item")
```



# Modifying DOM Elements (Examples)
```
const myElement = document.querySelector(".myId")
myElement.style.background = '#333'
```
```
const myElement = document.querySelector(".myId")
myElement.innerText = 'This is my new text'
```
```
const myElement = document.querySelector(".myId")
myElement.innerHTML = <div><button>This is a button</button></div>
```



# Create Elements using JavaScript
```
const myLi = document.createElement('li')
myLi.className = 'myClass'
myLi.id = 'myId'
myLi.setAttribute('title', 'My new Title')
myLi.appendChild(document.createTextNode('Hello World'))
```

This HTML code is essentially created:

```
<li class='myClass' id='myId' title='My new Title'>Hello World</li>
```



# Remove Elements using JavaScript
```
const myElement = document.querySelector(".myId")
myElement.remove()
```



# EventsListener in JavaScript and HTML

### Event-Listener using JavaScript
Inside a JavaScript function, we can access any object by using **document.querySelector()**.

Evenet-isteners in JavaScript requires two inputs:
* The event type
* A callback function

**addEventListener(myEventType, myFunction)**

```
const btn = document.querySelector("myClassName").addEventListener('click', function(){
  console.log("this event was triggered")
})
```

The callback function can take en **event object** *e* as a parameter.
The *e* is the event, which can be used to extract the event information. 
```
const btn = document.querySelector("myClassName").addEventListener('click', function(e){
  const myId = e.target.id // target is the object that was triggered. 
  console.log("this event was triggered by " + myId)
})
```

We can also provide a function name instead of an anonymous callback function:

```
const btn = document.querySelector("myClassName").addEventListener('click', myOnClickFunction)

function myOnClickFunction() {
  console.log("this event was triggered")
}
```

### Event bubbling vs. Evenet Deligation

**Event bubbling**:
Events in Javascript will automatically apply in the innter tag and move its way upwards. 
An event will 'bubble' up the HTML tree. 

**Event Deligation**: 
Sometimes we want an event to be deligated downwards the HTML tree: 
```
document.body.addEventListener('click' myClickFunction)
function myClickFunction(e) {
  if (e.target.className === "my desired class") {
    ...code...
  }
}
```

A better way might be to use e.target.classListContains, since the object might have several classes and the className must match all classes of the object. 
```
if (e.target.classList.contains("my desired class") {
```


### EventListener using HTML
JavaScript events can be triggered from HTML code.
There are several event type dependent on the object that is used, for example a button:
```
<button onClick="myFunction()">Click this button</button>

<script>
function myFunction(){
  ...code...
}
</script>
```
We can also access the object by sending **this** as the input parameter: 
```
<button onClick="myFunction(this)">Click this button</button>

<script>
function myFunction(x){
  console.log(x.value)
}
</script>
```

### Some Event Types
* click = single click
* dbclick = double click
* mouseenter = mouse entered the object
* mouseleave = mouse left the object
* mousemove = mouse is moving
* keydown = when a letter is pressed on the keyboard
* focus = when an object becomes in focus
* cut = when we cut something
* paste = when we paste something
* input = any input such as cut, paste, type, etc...
* And many more...




# Form Validation using document.forms
Form validation is used to validate forms. 

```
<form method="post" action="myServerSidePage.php" name="myForm" onsubmit="return myValidation()">
  <input type="text" name="myTextField" id="myTextField" />
  ...form code...
</form>

<script>
function myValidation(){
  // Get value from the textfield myTextField within the form.
  const myField = document.forms["myForm"]["myTextField"].value 
  
  if (myField == null) {
    alert("Fill the textfield!")
    return false
  } // Stops the submission of the form. 
}
</script>
```



### Example of Event Listner (ORDER)
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
