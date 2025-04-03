import { GoogleGenerativeAI, TaskType } from "../node_modules/@google/generative-ai/dist/generative-ai";

export class GoogleApiCall {
    private apiKey: string;
    private model: any;

    constructor(apiKey: string) {
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

    async generateEmbeddings(content: string) {
        try {
            const result = await this.model.embedContent({
                content,
                taskType: "RETRIEVAL_QUERY"
            });
            //console.log(result);
            return result.embedding;
        } catch (error) {
            console.error("Error generating embeddings:", error);
            throw error;
        }
    }
}




