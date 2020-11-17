// const sgMail = require("@sendgrid/mail");
// async function sendCustomerCustomerRegistrationEmail(
//   contacterEmail,
//   message,
//   name
// ) {
//   const subject = name+" has reached out!";

//   const dynamicTemplateData = {
//     subject,
//     name,
//     contacterEmail,
//     message,

//   };
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   const msg = {
//     to: [{ email: "suhana.nadeemv@gmail.com" }],
//     from: { email: contacterEmail }, // subject: subject,
//     // text: "and easy to do anywhere, even with Node.js",
//     // html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//     templateId: "d-20dccc0ef07a4f5ead6fecb1d43f6f91",
//     dynamicTemplateData,
//   };
//   sgMail
//     .send(msg)
//     .then(() => console.log("Email has been sent!"))
//     .catch(console.log);
// }

// module.exports.sendCustomerCustomerRegistrationEmail = sendCustomerCustomerRegistrationEmail;
