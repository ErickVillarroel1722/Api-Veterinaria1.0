import nodemailer from "nodemailer"
import dotenv from 'dotenv'
dotenv.config()


let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.HOST_MAILTRAP,
    port: process.env.PORT_MAILTRAP,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP,
    }
});

<<<<<<< HEAD
const sendMailToUser = async(userMail,token)=>{
    let info = await transporter.sendMail({
    from: 'admin@vet.com',
    to: userMail,
    subject: "Verifica tu cuenta de correo electrónico",
    html: `
=======
const sendMailToUser = (userMail, token) => {
	let mailOptions = {
		from: process.env.USER_MAILTRAP,
		to: userMail,
		subject: "Verifica tu cuenta",
		html: `<p>Hola, haz clic <a href="${process.env.URL_BACKEND}confirmar/${encodeURIComponent(
			token
		)}">aquí</a> para confirmar tu cuenta.</p>`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error.message);
		} else {
			console.log("Correo enviado: " + info.response);
		}
	});
};

// send mail with defined transport object
const sendMailToRecoveryPassword = async (userMail, token) => {
	let info = await transporter.sendMail({
		from: "admin@vet.com",
		to: userMail,
		subject: "Correo para reestablecer tu contraseña",
		html: `
>>>>>>> 20803d574c11b38f9213758187dd98d7d6c40b85
    <h1>Sistema de gestión (VET-ESFOT 🐶 😺)</h1>
    <hr>
    <a href=${process.env.URL_FRONTEND}confirmar/${token}>Clic para confirmar tu cuenta</a>
    <hr>
    <footer>Grandote te da la Bienvenida!</footer>
    `
    });
    console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
}

// send mail with defined transport object
<<<<<<< HEAD
const sendMailToRecoveryPassword = async(userMail,token)=>{
    let info = await transporter.sendMail({
    from: 'admin@vet.com',
    to: userMail,
    subject: "Correo para reestablecer tu contraseña",
    html: `
    <h1>Sistema de gestión (VET-ESFOT 🐶 😺)</h1>
    <hr>
    <a href=${process.env.URL_FRONTEND}recuperar-password/${token}>Clic para reestablecer tu contraseña</a>
    <hr>
    <footer>Grandote te da la Bienvenida!</footer>
    `
    });
    console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
}



// send mail with defined transport object
const sendMailToPaciente = async(userMail, password)=>{
    let info = await transporter.sendMail({
=======
const sendMailToPaciente = async(userMail,password)=>{
    let info = await transport.sendMail({
>>>>>>> 20803d574c11b38f9213758187dd98d7d6c40b85
    from: 'admin@vet.com',
    to: userMail,
    subject: "Correo de bienvenida",
    html: `
    <h1>Sistema de gestión (VET-ESFOT 🐶 😺)</h1>
    <hr>
    <p>Contraseña de acceso: ${password}</p>
    <a href=${process.env.URL_BACKEND}paciente/login>Clic para iniciar sesión</a>
    <hr>
    <footer>Grandote te da la Bienvenida!</footer>
    `
    });
    console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
}


<<<<<<< HEAD
=======

>>>>>>> 20803d574c11b38f9213758187dd98d7d6c40b85
export {
    sendMailToUser,
    sendMailToRecoveryPassword,
    sendMailToPaciente
}