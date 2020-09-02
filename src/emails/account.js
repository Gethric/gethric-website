const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

/* sgMail.send({
	to: "gethricweb@gmail.com",
	from: "gethricweb@gmail.com",
	subject: "stuff",
	text: "things",
});*/

const sendEmail = (name, email, subject, message) => {
	sgMail.send({
		to: "gethricweb@gmail.com",
		from: email,
		subject: subject,
		text: `from ${name}: ${message}`,
	});
};

module.exports = sendEmail;
