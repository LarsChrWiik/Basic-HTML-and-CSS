
# JQuery (less relevant)
JQuery is **less relevant** today since several of the features that where unique in JQuery is now part of vanilla JavaScript. For example:
* **JQuery.AJAX** can be replaced with **fetch**. 
* **JQuery.get** can be replaced by **document.querySelector**.



# JQuery
* jQuery has for a long time been the most popular **JavaScript Framework**. 
* JQuery's purpose is to simplify JavaScript programming. 
* JQuery is easy to learn



# JQuery Features
* HTML/DOM manipulation 
* CSS manipulation 
* HTML event methods 
* Effects and animations 
* AJAX Utilities



# How to add JQuery to the Browser
There are two main ways of getting JQuery for the browser. 
* Download the jQuery library from *jQuery.com*
* Include jQuery from a CDN, like Google

### Donwloading JQUery
Donwload from jQuery.com. 
Then add: 
```
<head>
<script src="jquery-3.4.0.min.js"></script>
</head>
```

### Google CDN
Instead of donwloading JQuery, we can link to it through the internet using CDN (Content Delivery Network). 
```
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
</head>
```



# JQuery Syntax
The ***$*** symbol refers to "***JQuery.***".

JQuery commands is built in the following structure:

$ ( ***selector*** ) . ***action*** ( )

### Example
*$(this).hide()* means hides the current element



# Document Ready Event
It is important to wait for the web page to load before executing code. This is done with:
```
$(document).ready(function(){
  ...jQuery code...
});
```



# jQuery Selectors
Get elements with id "myId"
```
$("#myId")
```

Get elements with class "myClass"
```
$(".myClass")
```

Get all elements with "\<p>":
```
$("p")
```

Get all elements of class "myClass" within "\<p>":
```
$("p.myclass")
```



<!-- # jQuery Events -->



