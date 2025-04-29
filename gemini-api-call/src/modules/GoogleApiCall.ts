import { GoogleGenerativeAI, TaskType } from "@google/generative-ai";
import { error } from "console";

export class GoogleApiCall {
	private apiKey: string;
	private genAI: any
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.genAI = new GoogleGenerativeAI(this.apiKey);
	}

	async generateSimpleAnswer(prompt: string): Promise<string> {
		try {
			const promptBriefing: string = `Hello,  you should behave like a nutrition expert. You are an agent that
			its purpose is to generate  answers to the user, so answer the prompt, in the language
			that the use asked, you should try to limit your answer. Prompt is ${prompt}.`
			const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
			const result = await model.generateContent(promptBriefing);
			return result.response.text();
		} catch (error) {
			throw error;
		}
	}

	async generateEmbeddings(content: string): Promise<number[]> {
		try {
			const model = this.genAI.getGenerativeModel({ model: "text-embedding-004" });
			const result = await model.embedContent(content);
			return result.embedding.values;
		} catch (error) {
			throw error;
		}
	}

	async calculateRetrievalQuery(embeddings: number[][], content: string): Promise<number> {
		try {
			const model = this.genAI.getGenerativeModel({ model: "text-embedding-004" });
			const result = await model.embedContent(content, { task_type: "RETRIEVAL_QUERY" });
			const embeddingQuery = result.embedding.values;

			const dotProducts = embeddings.map(embedding => this.calculateDotProduct(embedding, embeddingQuery));
			const maxIndex = dotProducts.indexOf(Math.max(...dotProducts));

			return maxIndex;
		} catch (error) {
			throw error;
		}
	}

	calculateDotProduct(a: number[], b: number[]): number {
		if (a.length !== b.length) {
			console.error("Vectors must be of the same length.");
			throw error("Vectors with different sizes");
		}

		return a.reduce((sum, value, index) => sum + value * b[index], 0);
	}
}

