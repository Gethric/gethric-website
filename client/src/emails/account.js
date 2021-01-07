const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

const sendEmail = async (name, email, subject, message) => {
	sgMail.send({
		to: "gethricweb@gmail.com",
		from: email,
		subject: subject,
		text: `from ${name}: ${message}`,
	});
};

module.exports = sendEmail;
