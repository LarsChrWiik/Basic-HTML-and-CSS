
# Node

**Node** and **Node.js** are used interchangably. 

**Node** is an interprefer for JavaScript and can be used to jun JavaScript code outside of a browser. This allows Node to run JavaScript as a backend language. Here are some advantages of using Node as the backend language:
* Node is easy to learn
* Using Node can reduce codelines due to syntactic sugar. 
* Allow both frontend and backend to be written in the sam language. This makes it easier to be fullstack developers. 
* Node works well with noSQL databases (such as MongoDB) due to the ease of JSON handling. 



# V8
*V8* is the Javascript engine that is run in Node. V8 runs on Windows 7+, macOS 10.12+, some versions of Linux can run standalone or be into any C++ application. 



# ES6
About **99%** of ES6 syntax is now supported in the lastest version of Node.
Each ES6 feature is in a certain state: **shipped**, **staged**, or **in progress**. 

List of features and their support state in Node:
https://nodejs.org/en/docs/es6/

For example, current NodeJS environments does not support the **import** syntax.
To allow this, we can run Node in experimental mode:
```
node --experimental-modules myFile.mjs
```



# Babel
Babel is a JavaScript compiler that tranform newer versions of JavaScript syntax (ES2015 (ES6)) into ES5 JavaScript. Babel comes as a node package and cal be installed with NPM:
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

### NPM Usage
Initialize the **package.json** file by using the **init** command. 
```
npm init
```

Install additional dependencies by using the **install** command "*npm install \<PackageName>*". An example of how to install **express** is shown below:
```
npm install express
```

The install command will update/create the **package-lock.json** file and the **node_modules** folder.
* The **package-lock.json** file describes the exact installment tree. *package-lock.json* should be committet to source repositories. 
* The **node_modules** folder contains downloaded dependencies from NPM. There are various arguments whether or not the *node_modules* should be included in repositories, but most users suggest not to push it. 

If *package-lock.json* is present, we can use *npm install* to get the required modules using the information stored in *package-lock.json*:
```
npm install
```


# Yarn
Similar to **npm**, **yarn** is a JavaScript package managers. 
It is a debate whether to use yarn or npm. 

Yarn can be installed with npm or brew: 
```
npm install yarn --global
```
or 
```
brew update
brew install yarn
```

Yarn commands are similar to npm:
```
yarn init
```
```
yarn add [package]
```
```
yarn remove [package]
```
```
yarn install
```

NB: yarn uses Facebook’s npm registry mirror, which means that some meta-data are sent to Facebook. 



# Usefull packages in Node

### Express
Express is a web framework for Node. 


### body-parser

### Lodash

### Async

### Babel-core
