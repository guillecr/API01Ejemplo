API

Antes de poder ser usado, hace falta instalar las reposiciones necesarias.
Para ello primero iniciaremos un repositorio npm
    npm init

Despues añadiremos los siguientes repositorios:
    - express
    - mongoose
    - cors
    - body-parser
    - nodemon
Comando:
    npm install --save express mongoose cors body-parser
    npm install nodemon --salve-dev

Despues de ello, para levantar el servicio tenemos que levantar el daemon de node (nodemon). Como esta guardado de manera 
local, la manera de ejecutarlo es por medio de 
    npx nodemon