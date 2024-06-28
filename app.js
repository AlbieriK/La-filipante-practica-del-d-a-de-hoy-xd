//Guardar en una constante la libreria mongoose para usarla
const mongoose = require('mongoose')
//Guardo la url de la conexion de BD en constante
const url_bd = 'mongodb://localhost:27017/Libreria'
//Conexion con la base de datos en MongoDB
mongoose.connect(url_bd)
//Promesa
//.then es para que comprobar que todo funcine bien
.then(() => {
    console.log("Si Funciona")
})
//.cath es para cachar un error
.catch((err) => {
    console.log("No Funciono")
})
//Esquema para la BD
const Esquema_Libreria=new mongoose.Schema({
    Title:{
        type:String
    },
    Gender:{
        type:String
    },
    Serie:{
        type:String
    },
    Lenguage:{
        type:String
    },
    Reseñas:{
        type:String
    },
    PlacePublication:{
        type:String
    },
    Editorial:{
        type:String
    }

})
//Coleccion es una tabla
const modelo_Libreria=new mongoose.model('DatosDL',Esquema_Libreria)
//Meter datos en mi tabla de BD
modelo_Libreria.create({
    Tittle: "El bichosiuuu",
    Gender: "Fiction",
    Serie:   "Si",
    Lenguage: "Español y Portuges",
    Reseñas: "Bien calificada xd",
    PlacePublication: "Cdmx",
    Editorial: "Las bichotas y el bicho siuuu"
})
//Para correr el programa es en la terminal y poner node app.js
