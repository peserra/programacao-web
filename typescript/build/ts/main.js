import { GoogleApiCall } from '../modules/CallAIModel';
const apiKey = "AIzaSyA941xEF5AccsmYtflct4hv8XNfLp0EQQE";
const googleApiCall = new GoogleApiCall(apiKey);
const content = "me explique como fazer um bolo de cenoura";
googleApiCall.generateEmbeddings(content)
    .then(result => {
    console.log("Embeddings:");
    //console.log(result);
})
    .catch(error => {
    console.error("Error generating embeddings:", error);
});
