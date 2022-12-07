const mailer = require('nodemailer');
module.exports = (email,nome,mensagem) => {
    const smtp = mailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'midnight.info.sender@gmail.com',  //email que criei para enviar os emails
        pass: 'irpqvabkpklxawey' //uma chave unica que é feita por uma config no gmail para poder enviar por bot
    },
    tls: {
        rejectUnauthorized: false
      }
});

// Email: midnight.info.sender@gmail.com   Senha:MidnightSender

const mailOptions = {
  from: 'midnight.info.sender@gmail.com',
  to: email, //primeira variavel da função,que adiciona quando for chamar a função, ex:juliopm142@gmail.com
  subject: `Suas Citações do Diario Oficial, Sr(a). ${nome}`, //aqui colocaria o assunto se quiser 
  text: mensagem  //segunda variavel da função,que adiciona quando for chamar a função, ex: !lorem  
};

    return new Promise((resolve,reject) =>{
        smtp.sendMail(mailOptions)
        .then(response=>{
            smtp.close();
            return resolve(response);
        })
        .catch(error => {
            smtp.close();
            return reject(error)
        })
    })
}



