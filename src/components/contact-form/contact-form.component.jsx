import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "../../sass/components/contact-form.styles.scss";
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

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		createMessageDocument(this.state);
		this.setState({ name: "", email: "", subject: "", message: "" });
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
