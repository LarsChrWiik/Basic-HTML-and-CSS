
# DOM Selection & Manupulation
**DOM** = Document Object Model. The DOM is basically the user interface. 



# DOM vs JQuery ($)
JQuery has long been used to support the DOM, but recent updates has made **JQuery less relevant** since several of the features that where unique with JQuery is now part of vanilla JavaScript. 
* **JQuery.AJAX** can be replaced with **fetch**. 
* **jQuery animations** can now be done in the browser using **CSS Transitions** or **CSS Animations**.
* **JQuery.get** can be replaced by **document.querySelector**.



# DOM tree
**window** is the parent object of the browser view. 
The window object is **this** in JavaScript. 

**document** is the entire HTML code, which is basicly the entire web page.
*document* is inside *window*. 



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



# Events using document.getElementById()
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
Inside a JavaScript function, we can access any object by using **document.getElementById()**.

```
<button id="myBtn" onClick="myFunction(this)">Click this button</button>

<script>
function myFunction(){
  const btn = document.getElementById("myBtn")
  console.log(btn.value)
}
</script>
```



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
