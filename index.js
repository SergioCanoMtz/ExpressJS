// nmp init -y    ->   para crear el archivo package.json que describe al proyecto
//npm init        ->   para crear el archivo package.json pero de damos los valores como el name, etc. 
//npm install express o npm i express-> para instalar express
//npm install nodemon -D  -> para instalar nodemon que hace que vea si hay cambios en nuestro codigo si es así, reinicia el servidor por nosotros

const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('<h1>Hola mundo con NodeJS y expressJS</h1>');
})

app.get('/about',(req, res)=>{
    res.send('<h1>About me</h1>');
})
// creamos rutas en este caso para /contact
app.get('/contact',(req, res)=>{
    res.send('<h1>Form contact</h1>');
})

app.listen(3000, ()=>{
    console.log('Server on port 3000');
})