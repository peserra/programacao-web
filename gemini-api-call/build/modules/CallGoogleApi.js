"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleApiCall = void 0;
const generative_ai_1 = require("@google/generative-ai");
class GoogleApiCall {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.genAI = new generative_ai_1.GoogleGenerativeAI(this.apiKey);
    }
    generateSimpleAnswer(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
                const result = yield model.generateContent(prompt);
                return result;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    generateEmbeddings(content) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const model = this.genAI.getGenerativeModel({ model: "text-embedding-004" });
                const result = yield model.embedContent(content);
                return result.embedding.values;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.GoogleApiCall = GoogleApiCall;
