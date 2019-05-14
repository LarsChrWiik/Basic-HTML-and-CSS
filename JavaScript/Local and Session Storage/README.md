
# LocalStorage and Session Storage
LocalStorage and SessionStorage are ways to store information within the browser. 

Variables stored in LocalStorage are stored locally in the browser, even after closing the browser and re-opening it. 
Variables stored in SessionStorage will be remed when the browser is closed or after the session has times out. 

### Store and Get Single Values

We can store strings in the storage using the following command:
```
localStorage.setItem('myKey', 'myValue')
```
```
sessionStorage.setItem('myKey', 'myValue')
```

We can get items from the storage using:
```
const myItem = localStorage.getItem('myKey')
```
```
const myItem = sessionStorage.getItem('myKey')
```

### Store and Get Arrays

We can also store an array to the storage, however, the array needs to be converted into JSON format: 
```
localStorage.setItem('myArrayKey', JSON.stringify(myArray))
```
```
sessionStorage.setItem('myArrayKey', JSON.stringify(myArray))
```

We get the array from the storage we must use JSON.parse():
```
const myItem = JSON.parse(localStorage.getItem('myArrayKey'))
```
```
const myItem = JSON.parse(sessionStorage.getItem('myArrayKey'))
```

### Remove from Storage

We can remove the item from the storage using:
```
localStorage.removeItem('myKey')
```
```
sessionStorage.removeItem('myKey')
```
