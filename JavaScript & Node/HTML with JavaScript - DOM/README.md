
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


