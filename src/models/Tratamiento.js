import mongoose, {Schema,model} from 'mongoose'

const tratamientoSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    descripcion:{
        type:String,
        require:true,
        trim:true
    },
    estado:{
        type:Boolean,
        require:true,
        default:true
    },
    prioridad:{
        type:String,
        require:true,
        enum:['Baja','Media','Alta']
    },
    paciente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Paciente'
    }
},{
    timestamps:true
})

<<<<<<< HEAD
export default model('Tratamiento',tratamientoSchema)
=======
export default model('Tratamiento',tratamientoSchema)
>>>>>>> 20803d574c11b38f9213758187dd98d7d6c40b85
