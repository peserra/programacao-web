"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CallGoogleApi_1 = require("./modules/CallGoogleApi");
const apiKey = "AIzaSyA941xEF5AccsmYtflct4hv8XNfLp0EQQE";
const apiCall = new CallGoogleApi_1.GoogleApiCall(apiKey);
const content = "me explique como fazer um bolo de cenoura";
apiCall.generateSimpleAnswer(content).then(result => console.log(result.response.text()));
apiCall.generateEmbeddings(content)
    .then(result => {
    console.log("Embedings", result);
})
    .catch(error => {
    console.log("Error generating embedings", error);
});
