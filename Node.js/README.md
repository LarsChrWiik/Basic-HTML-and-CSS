
# Node
**Node** is an interprefer for JavaScript. 

**Node** and **Node.js** are used interchangably. 



# ES6 in Node, V8, Babel
About **99%** of ES6 syntax is now supported in the lastest version of Node.
Each ES6 feature is in a certain state: **shipped**, **staged**, or **in progress**. 

List of features and their support state in Node:
https://nodejs.org/en/docs/es6/

For example, current NodeJS environments does not support the **import** syntax.
To allow this, we can run Node in experimental mode:
```
node --experimental-modules myFile.mjs
```

**V8** is the Javascript engine that is run in Node. V8 runs on Windows 7+, macOS 10.12+, some versions of Linux can run standalone or be into any C++ application. 

**Babel** is a JavaScript compiler that tranform newer versions of JavaScript syntax (ES2015 (ES6)) into ES5 JavaScript. Babel comes as a node package and cal be installed with NPM:
```
npm install babel-cli
```
Babel can then be used to run JavaScript files containing ES6 syntax.
```
babel script.js
```


# NPM
**NPM** stands for **N**ode **P**ackage **M**anager and is the default package manager in Node.js JavaScript runtime environment. 

NPM consist of two components:
* A commandline tool using for setting up projects and installing additional dependencies. 
* An online database that contains public and paid-for packages (called NPM registry). 

## NPM Usage
Initialize the **package.json** file by using the **init** command. 
```
npm init
```

Install additional dependencies by using the **install** command. 
```
npm install express
```

The install command will update/create the **package-lock.json** file and the **node_modules** folder.

The **package-lock.json** file describes the exact installment tree and is intended to be committet into soruce repositories. 

The **node_modules** folder contains downloaded dependencies from NPM. 
There are various arguments whether or not the node_modules should be included in repositories. 

If *package-lock.json* is present, we can use *npm install* to get the required modules:
```
npm install
```


