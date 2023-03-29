let express = require('express');
//inyeeción de la dependencia de express
let app = express();
//app que hace la función de servidor
let personsRoute = require('./routes/person');
let studentRoute = require('./routes/student');
let addStudentRoute = require('./routes/addStudent');
//incluimos el router que viene de personas


app.set('view engine','ejs');
app.use(personsRoute); // llamamos el router de person
app.use(studentRoute); // llamamos el router de student
app.use(addStudentRoute); // llamamos el router de addStudent
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000;
//definición del puerto de escucha

app.listen(PORT,()=>{
    console.log('escuchando en el puerto 3000') // si funcionó la conexión imprimimos un mensaje en la consola
})