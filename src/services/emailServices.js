const nodemailer = require('nodemailer');
require('dotenv').config({ path: 'variaveis.env' });

module.exports = {
    
    // Esse módulo apenas envia o email
    enviarEmail: (email, cdVerificacao) => {

        let user = process.env.EMAIL_USER;
        let pass = process.env.EMAIL_PASS;

        try {
            // Sintaxe para enviar um email
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: { user, pass }
            });

            // HTML content for the email
            const htmlContent = `
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            color: #333;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            width: 100%;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #fff;
                            border-radius: 10px;
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            background-color: #4CAF50;
                            color: #fff;
                            padding: 10px;
                            border-radius: 10px 10px 0 0;
                            text-align: center;
                        }
                        .content {
                            padding: 20px;
                            text-align: center;
                        }
                        .footer {
                            padding: 10px;
                            text-align: center;
                            font-size: 12px;
                            color: #777;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Validar Email TECH FORCE</h1>
                        </div>
                        <div class="content">
                            <p>Olá,</p>
                            <p>O seu código de verificação é <strong>${cdVerificacao}</strong></p>
                            <p>Por favor, use este código para validar seu email ou recuperar Senha.</p>
                        </div>
                        <div class="footer">
                            <p>&copy; ${new Date().getFullYear()} TECH FORCE. Todos os direitos reservados.</p>
                        </div>
                    </div>
                </body>
                </html>
            `;

            transporter.sendMail({
                from: user,
                to: email,
                subject: "Validar Email TECH FORCE",
                html: htmlContent
            });

        } catch (error) {
            console.log(error);
        }
    }
}
