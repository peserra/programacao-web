import { GoogleGenerativeAI, TaskType } from "@google/generative-ai";

export class GoogleApiCall {
	private apiKey: string;
	private genAI: any
	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.genAI = new GoogleGenerativeAI(this.apiKey);
	}

	async generateSimpleAnswer(prompt: string) {
		try {
			const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
			const result = await model.generateContent(prompt);
			return result;
		} catch (error) {
			throw error;
		}
	}

	async generateEmbeddings(content: string) {
		try {
			const model = this.genAI.getGenerativeModel({ model: "text-embedding-004" });
			const result = await model.embedContent(content);
			return result.embedding.values;
		} catch (error) {
			throw error;
		}
	}

	calculateDotProduct(a: number[], b: number[]): number | null {
		if (a.length !== b.length) {
			console.error("Vectors must be of the same length.");
			return null;
		}

		return a.reduce((sum, value, index) => sum + value * b[index], 0);
	}
}

