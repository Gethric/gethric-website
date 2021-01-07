import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyDQjvT2Ws2aYI9BSvXG8LuXz2saPAjzsRE",
	authDomain: "gethric-website.firebaseapp.com",
	databaseURL: "https://gethric-website.firebaseio.com",
	projectId: "gethric-website",
	storageBucket: "gethric-website.appspot.com",
	messagingSenderId: "24437756212",
	appId: "1:24437756212:web:50facca8c2b2f9a3d99561",
	measurementId: "G-75XWKK8ZBB"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const createMessageDocument = ({ name, email, subject, message }) => {
	firestore
		.collection("messages")
		.add({
			name: name,
			message: message,
			email: email,
			subject: subject
		})

		.then(function() {
			console.log("Document successfully written!");
		})
		.catch(function(error) {
			console.error("Error writing document: ", error);
		});
};

export default firebase;
