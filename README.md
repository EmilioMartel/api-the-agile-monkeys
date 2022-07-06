# Api theAgileMonkeys.
***
## Second phase of the Agile Monkeys recruitment process: Create an API Test - The CRM service

En este proyecto de backend he utilizado las siguientes dependencias:
 ##### Para el modo desarrollo:
- [babel/cli](https://babeljs.io/docs/en/babel-cli) ** Es la forma de usar babel desde la cmd
- [@babel/core](https://babeljs.io/docs/en/babel-core) ** el propio babel
- [@babel/node](https://babeljs.io/docs/en/babel-node) ** Usar babel desde nodejs
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) ** usaremos las ultimas caracteristicas del lenguaje
- [nodemon](https://www.npmjs.com/package/nodemon)

```
    npm i @babel/cli @babel/core @babel/node @babel/preset-env nodemon -D
```

#### Para el modo producción:
- [bcryptjs]()
- [cors]()
- [dotenv]()
- [express]()
- [helmet]()
- [jsonwebtoken]()
- [mongoose]()
- [morgan]()

***
### Una vez tengamos todas nuestras dependencias instaladas comenzaremos con la configuración del proyecto.

1º Crearemos en la raiz del proyecto un archivo llamado ".babelrc" y donde almacerá:

```
{
    "presets": [
        "@babel/preset-env"
    ]
}
```
Este archivo se le indicará que preset estaremos usando para que lo pueda traducir a lo que hagamos

2º en nuestro archivo package.json estableceremos los siguientes scripts:
```
"scripts": {
    "build": "babel src --out-dir build",
    "dev": "nodemon src/index.js --exec babel-node",
    "start": "node build/index.js"
  }
```
En nuestra raiz del proyecto deberemos también tener creado una carpeta build donde almacenará todo nuestro projecto compilado y compatibles con todos los navegadores y servidores. Para ejecutar tanto en modo desarrollo como en producción:
```
 npm run dev 
 npm start
 npm run build
```
3º La organización jerarquica de nuestra API se establece de la siguiente manera:
+---build
|   |   app.js
|   |   config.js
|   |   database.js
|   |   index.js
|   |
|   +---controllers
|   |       auth.controller.js
|   |       customers.controller.js
|   |       user.controller.js
|   |
|   +---libs
|   |       initialSetup.js
|   |
|   +---middlewares
|   |       authJwt.js
|   |       index.js
|   |       verifySignup.js
|   |
|   +---models
|   |       Customer.js
|   |       Role.js
|   |       User.js
|   |
|   \---routes
|           auth.routes.js
|           customers.routes.js
|           user.routes.js
|
+---postman
|       Api The Agile Monkeys.postman_collection.json
|
\---src
    |   app.js
    |   config.js
    |   database.js
    |   index.js
    |
    +---controllers
    |       auth.controller.js
    |       customers.controller.js
    |       user.controller.js
    |
    +---libs
    |       initialSetup.js
    |
    +---middlewares
    |       authJwt.js
    |       index.js
    |       verifySignup.js
    |
    +---models
    |       Customer.js
    |       Role.js
    |       User.js
    |
    \---routes
            auth.routes.js
            customers.routes.js
            user.routes.js
|   .babelrc
|   .gitignore
|   package-lock.json
|   package.json
|   README.md
