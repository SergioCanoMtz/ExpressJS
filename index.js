// nmp init -y    ->   para crear el archivo package.json que describe al proyecto
//npm init        ->   para crear el archivo package.json pero de damos los valores como el name, etc. 
//npm install express o npm i express-> para instalar express
//npm install nodemon -D  -> para instalar nodemon que hace que vea si hay cambios en nuestro codigo si es así, reinicia el servidor por nosotros
//npx nodemon index.js ejecutar el servidor con nodemon

const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('<h1>Hola mundo con NodeJS y expressJS</h1>');
})

// creamos rutas en este caso para /contact
app.get('/contact',(req, res)=>{
    res.send('<h1>Form contact</h1>');
})

app.get('/about',(req, res)=>{
    res.send('<h1>About me</h1>');
})

app.get('/Galery',(req, res)=>{
    res.send('<h1>Galery</h1>');
})

app.post('/post',(req, res)=>{
    res.send('<h1>Postt</h1>');
})

app.delete('/delete',(req, res)=>{
    res.send('delete');
})

app.put('/put',(req, res)=>{
    res.send('Put');
})

//para que express entienda los JSON
app.use(express.json());

//A traves de la peticion get tambien podemos recivir un JSON
app.get('/user',(req, res) => {
    res.json({
        "username":"Sergiocano13",
        "name":"Sergio",
        "password":"Cano1234"
    });
})

app.post('/user',(req, res)=>{
    console.log(req.body)
    res.send('Peticion post recivida');
})

app.listen(3000, ()=>{
    console.log('Server on port 3000');
})