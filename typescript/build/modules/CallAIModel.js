var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GoogleGenerativeAI } from "../node_modules/@google/generative-ai/dist/generative-ai";
export class GoogleApiCall {
    constructor(apiKey) {
        this.apiKey = apiKey;
        const genAI = new GoogleGenerativeAI(this.apiKey);
        this.model = genAI.getGenerativeModel({ model: "text-embedding-004" });
    }
    // async run(prompt: string) {
    //     try {
    //         const result = await this.model.generateContent(prompt);
    //         return result;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    generateEmbeddings(content) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.model.embedContent({
                    content,
                    taskType: "RETRIEVAL_QUERY"
                });
                //console.log(result);
                return result.embedding;
            }
            catch (error) {
                console.error("Error generating embeddings:", error);
                throw error;
            }
        });
    }
}
