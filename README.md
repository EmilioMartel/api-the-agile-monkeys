# Api theAgileMonkeys.
***
## Second phase of the Agile Monkeys recruitment process: Create an API Test - The CRM service

EIn this backend project I have used the following dependencies:
 ##### For development mode:
- [babel/cli](https://babeljs.io/docs/en/babel-cli) ** It is the way to use babel from the cmd
- [@babel/core](https://babeljs.io/docs/en/babel-core) ** Babel itself
- [@babel/node](https://babeljs.io/docs/en/babel-node) ** Using babel from nodejs
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) ** We will use the latest language features
- [nodemon](https://www.npmjs.com/package/nodemon) ** Automatically updates the server for each change we save

```
    npm i @babel/cli @babel/core @babel/node @babel/preset-env nodemon -D
```

#### For production mode:
- [bcryptjs]()
- [cors]()
- [dotenv]()
- [express]()
- [helmet]()
- [jsonwebtoken]()
- [mongoose]()
- [morgan]()

***
### Once we have all our dependencies installed we will start with the configuration of the project.

1º We will create a file called ".babelrc" in the root of the project and where it will store:

```
{
    "presets": [
        "@babel/preset-env"
    ]
}
```
####### This file will indicate which preset we will use to translate what we do

2º In our package.json file we will set the following scripts:
```
"scripts": {
    "build": "babel src --out-dir build",
    "dev": "nodemon src/index.js --exec babel-node",
    "start": "node build/index.js"
  }
```
In our project root we must also have created a build folder where all our compiled project will be stored and compatible with all browsers and servers. To run in both development and production modes:
```
 npm run dev 
 npm start
 npm run build
```
### The hierarchical organization of our API is established as follows:
 * build/
 * postman/
 * src/
    * controllers/ 
    * libs/ 
    * middlewares/ 
    * models/ 
    * routes/ 
    * app.js ** Configuration of all API services
    * config.js ** Contains the global variables of the API
    * database.js ** Database setup and startup
    * index.js ** We indicate where the server is hosted
* .babelrc ** Babel Configuration
* package.json
* README.md

### Folder content:
- ##### postman: It contains all the predefined queries of our API. It only remains to import them to our postman and that's it.
- ##### controllers: Manage the CRUD API
- ##### libs: The roles and the API admin will be created only once at the beginning of the startup
- ##### middlewares: Manage the verification and authentication of user tokens
- ##### models: Type of data that we will store in our database
- ##### routes: All our API routes
