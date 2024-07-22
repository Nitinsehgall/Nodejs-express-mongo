const nodemailer = require("nodemailer");

const sendMail= async(req,res)=>{

let testAccount =await nodemailer.createTestAccount();
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: 'jessy.feeney62@ethereal.email',
        pass: '1Kjnec7sZe6qMB98sc'
    },
});


let info=await transporter.sendMail(
    {
        from: '"Nitin sehgal👻" <nitin123>', // sender address
        to: "imnitinsehgal@gmail.com, baz@example.com", // list of receivers
        subject: "Hello Nitin",
        text: "Hello world", 
        html: "<b>Hello world?</b>", 
    }
)
res.send("message sent:%s",info.messageId);
res.json(info);
}






module.exports=sendMail;