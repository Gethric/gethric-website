import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
//import { sendEmail } from "../../emails/account.js";
import "./contact-form.styles.scss";

class ContactForm extends React.Component {
	constructor() {
		super();

		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
		};
	}

	sendForm = () => {
		//sendEmail(this.name, this.email, this.subject, this.message);
	};

	resetForm = () => {
		this.setState({ name: "", email: "", subject: "", message: "" });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log("From handleSubmit " + this.state);
		//this.sendForm();
		this.resetForm();
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="contact-form">
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="name"
						type="text"
						handleChange={this.handleChange}
						value={this.state.name}
						label="Name"
						required
					/>

					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="Email"
						required
					/>

					<FormInput
						name="subject"
						type="text"
						value={this.state.subject}
						handleChange={this.handleChange}
						label="Subject"
						required
					/>

					<FormInput
						name="message"
						type="text"
						handleChange={this.handleChange}
						value={this.state.message}
						label="Message"
						required
					/>

					<CustomButton type="submit">Send</CustomButton>
				</form>
			</div>
		);
	}
}

export default ContactForm;
