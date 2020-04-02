import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import axios from "axios";
import "./contact-form.styles.scss";
import { createMessageDocument } from "../../firebase/firebase.utils";

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			subject: "",
			message: ""
		};
	}

	sendForm = () => {
		axios({
			method: "POST",
			url: "http://localhost:3002/send",
			data: this.state
		}).then(response => {
			if (response.data.status === "success") {
				alert("Message Sent.");
			} else if (response.data.status === "fail") {
				alert("Message failed to send.");
			}
		});
	};

	resetForm = () => {
		this.setState({ name: "", email: "", subject: "", message: "" });
	};

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		this.sendForm();
		//createMessageDocument(this.state);
		this.resetForm();
	};

	handleChange = event => {
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
