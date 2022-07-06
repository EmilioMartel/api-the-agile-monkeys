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
### La organización jerarquica de nuestra API se establece de la siguiente manera:
 * build/
 * postman/
 * src/
    * controllers/ 
    * libs/ 
    * middlewares/ 
    * models/ 
    * routes/ 
    * app.js // Configuración de todos los servicios de la API
    * config.js // Contiene las variables globales de la API
    * database.js // Configuración y arranque de la base de datos
    * index.js // Indicamos dónde se aloja el servidor
* .babelrc // Configuración de Babel
* package.json
* README.md

### Contenido de las carpetas:
- ##### controllers: Manejarán el CRUD de la API
- ##### libs: Crearán solo una vez al comienzo del arranque los roles y el admin de la API
- ##### middlewares: Gestiona la verificacion y autenticación los tokens de los usuarios
- ##### models: Tipo de datos que almacenarios en nuestra base de datos
- ##### routes: Diversas rutas de acceso de nuestra API
