import { GoogleApiCall } from "./modules/CallGoogleApi";


// vai estar no BD do usuario:
const apiKey: string = "AIzaSyA941xEF5AccsmYtflct4hv8XNfLp0EQQE";

const apiCall = new GoogleApiCall(apiKey);
const content: string = "me explique como fazer um bolo de cenoura";

apiCall.generateSimpleAnswer(content).then(result => console.log(result.response.text()));
apiCall.generateEmbeddings(content)
	.then(result => {
		console.log("Embedings", result);
	})
	.catch(error => {
		console.log("Error generating embedings", error);
	});

