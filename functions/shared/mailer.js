const mailer = require("nodemailer");

const transporterOptions = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.MAILERUSER,
    serviceClient: process.env.MAILERSERVICECLIENT,
    privateKey: process.env.MAILERPRIVATEKEY.split("|").join("\n"),
  },
};

const transporter = mailer.createTransport(transporterOptions);

module.exports = async function sendEMail(mailOptions) {
  await transporter.verify();
  return await transporter
    .sendMail(mailOptions)
    .then((info) => {
      return info;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
