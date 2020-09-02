import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import sendEmail from "../../emails/account.js";
import "./contact-form.styles.scss";
import { createMessageDocument } from "../../firebase/firebase.utils";

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
		};
	}

	sendForm = () => {
		const state = this.state;
		sendEmail(state.name, state.email, state.subject, state.message);
	};

	resetForm = () => {
		this.setState({ name: "", email: "", subject: "", message: "" });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		this.sendForm();
		//createMessageDocument(this.state);
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
