//importar mongoose
const mongoose = require('mongoose')

//importar la base de datos de MONGODB Compass
const url = 'mongodb://localhost/tarea'

mongoose.connect(url, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
    })
.then(()=> console.log('CONECTADO A MONGO'))
.catch( (problema)=> console.log('El error de conexion es: ' + problema))

const dataSchema = mongoose.Schema({
    nombre:String,
    edad:Number,
    pais:String
})

const DataModel = mongoose.model('datos', dataSchema)

//Mostrar
const mostrar = async () => {
    const data = await DataModel.find()
    console.log(data)
}

//Se llama la función para mostrar
mostrar()

const crear = async() =>{
    const newDato = new DataModel({
        nombre: 'Antonio',
        edad: 55,
        pais: 'Colombia'
    })
    const resultado = await newDato.save()
    console.log(resultado)
}

//crear()

const actualizar = async (id)=>{
    const newDato = await DataModel.updateOne({_id:id},
    {
        $set:{
            nombre:'Maria De Los Angeles'
        }
    })
}

//Se llama la función para actualizar
//pasando un id como parámetro
//actualizar('60b89fdde3ca33768cb4e998')

const eliminar = async (id) =>{

    const newDato = await DataModel.deleteOne({_id:id})
    console.log(newDato)
}

//Se pasa el id para eliminar
//eliminar('60b8a13a7678d668c8b1b309')