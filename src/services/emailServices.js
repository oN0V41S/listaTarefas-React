// Biblioteca usada para enviar email(s)
const nodemailer = require('nodemailer');

require('dotenv').config({ path: 'variaveis.env' });

module.exports = {
    
    //Esse módulo apenas envia o email
    enviarEmail: (email, cdVerificacao) => {

        let user = process.env.EMAIL_USER;
        let pass = process.env.EMAIL_PASS;

        try{

            // Sintax para enviar um email
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: { user, pass }
            })
    
            transporter.sendMail({
                from: user,
                to: email,
                subject: "Validar Email TECH FORCE",
                text: `O seu código de verificação é ${cdVerificacao}`
            })
            

        }catch(error){
            console.log(error)
        }
    }
}