<<<<<<< HEAD
import mongoose from "mongoose"
import { sendMailToPaciente } from "../config/nodemailer.js"
import Paciente from "../models/Paciente.js"
import generarJWT from "../helpers/crearJWT.js"
import Tratamiento from "../models/Tratamiento.js"

const loginPaciente = async(req,res)=>{
    const {email,password} = req.body

    if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})

    const pacienteBDD = await Paciente.findOne({email})
    if(!pacienteBDD) return res.status(404).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})

    const verificarPassword = await pacienteBDD.matchPassword(password)
    if(!verificarPassword) return res.status(404).json({msg:"Lo sentimos, el password no es el correcto"})

=======
import Paciente from "../models/Paciente.js"


const loginPaciente = async(req,res)=>{
    const {email,password} = req.body
    if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const pacienteBDD = await Paciente.findOne({email})
    if(!pacienteBDD) return res.status(404).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})
    const verificarPassword = await pacienteBDD.matchPassword(password)
    if(!verificarPassword) return res.status(404).json({msg:"Lo sentimos, el password no es el correcto"})
>>>>>>> 20803d574c11b38f9213758187dd98d7d6c40b85
    const token = generarJWT(pacienteBDD._id,"paciente")
		const {nombre,propietario,email:emailP,celular,convencional,_id} = pacienteBDD
    res.status(200).json({
        token,
        nombre,
        propietario,
        emailP,
        celular,
        convencional,
        _id
    })
}
<<<<<<< HEAD

=======
>>>>>>> 20803d574c11b38f9213758187dd98d7d6c40b85
const perfilPaciente =(req,res)=>{
    delete req.pacienteBDD.ingreso
    delete req.pacienteBDD.sintomas
    delete req.pacienteBDD.salida
    delete req.pacienteBDD.estado
    delete req.pacienteBDD.veterinario
    delete req.pacienteBDD.createdAt
    delete req.pacienteBDD.updatedAt
    delete req.pacienteBDD.__v
    res.status(200).json(req.pacienteBDD)
}
<<<<<<< HEAD

const listarPacientes = async (req,res)=>{
    const pacientes = await Paciente.find({estado:true}).where('veterinario').
    equals(req.veterinarioBDD).select("-salida -createdAt -updatedAt -__v").
    populate('veterinario','_id nombre apellido email password')

    res.status(200).json(pacientes)

}
=======
const listarPacientes = async (req,res)=>{
    const pacientes = await Paciente.find({estado:true}).where('veterinario').equals(req.veterinarioBDD).select("-salida -createdAt -updatedAt -__v").populate('veterinario','_id nombre apellido')
    res.status(200).json(pacientes)
}
import mongoose from "mongoose"
>>>>>>> 20803d574c11b38f9213758187dd98d7d6c40b85

const detallePaciente = async(req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el veterinario ${id}`});
    const paciente = await Paciente.findById(id).select("-createdAt -updatedAt -__v").populate('veterinario','_id nombre apellido')
    const tratamientos = await Tratamiento.find({estado:true}).where('paciente').equals(id)
<<<<<<< HEAD
    console.log(tratamientos)
=======
>>>>>>> 20803d574c11b38f9213758187dd98d7d6c40b85
    res.status(200).json({
        paciente,
        tratamientos
    })
}
<<<<<<< HEAD

const registrarPaciente = async(req,res)=>{
    //desestructura el email
    const {email} = req.body

    //validar los campos
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})

    //verficar si el paciente ya se encuentra registrado
    const verificarEmailBDD = await Paciente.findOne({email})

    //crear un password
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoPaciente = new Paciente(req.body)

    const password = Math.random().toString(36).slice(2)
    nuevoPaciente.password = await nuevoPaciente.encrypPassword("vet"+password)

    //enviar el correo electronico
    await sendMailToPaciente(email,"vet"+password)

    //asociar el paciente con el veterinario
    nuevoPaciente.veterinario=req.veterinarioBDD._id

    //guardar nuevo paciente
    await nuevoPaciente.save()
    res.status(200).json({msg:"Registro exitoso del paciente y correo enviado"})
}

=======
const registrarPaciente = async(req,res)=>{
    const {email} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarEmailBDD = await Paciente.findOne({email})
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoPaciente = new Paciente(req.body)
    const password = Math.random().toString(36).slice(2)
    nuevoPaciente.password = await nuevoPaciente.encrypPassword("vet"+password)
    await sendMailToPaciente(email,"vet"+password)
    nuevoPaciente.veterinario=req.veterinarioBDD._id
    await nuevoPaciente.save()
    res.status(200).json({msg:"Registro exitoso del paciente y correo enviado"})
}
>>>>>>> 20803d574c11b38f9213758187dd98d7d6c40b85
const actualizarPaciente = async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el veterinario ${id}`});
    await Paciente.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({msg:"Actualización exitosa del paciente"})
}

const eliminarPaciente = async (req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el veterinario ${id}`})
    const {salida} = req.body
    await Paciente.findByIdAndUpdate(req.params.id,{salida:Date.parse(salida),estado:false})
    res.status(200).json({msg:"Fecha de salida del paciente registrado exitosamente"})
}

export {
		loginPaciente,
<<<<<<< HEAD
		perfilPaciente, 
=======
		perfilPaciente,
>>>>>>> 20803d574c11b38f9213758187dd98d7d6c40b85
        listarPacientes,
        detallePaciente,
        registrarPaciente,
        actualizarPaciente,
        eliminarPaciente
<<<<<<< HEAD
}
=======
    }
>>>>>>> 20803d574c11b38f9213758187dd98d7d6c40b85
