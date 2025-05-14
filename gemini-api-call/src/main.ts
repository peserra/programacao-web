import { GoogleApiCall } from "./modules/GoogleApiCall";
import { FileTextModule } from "./modules/FileTextModule";
import * as fs from "fs";
import * as path from "path";

async function main() {
	const filePaths: string[] = [
		path.resolve(__dirname, "..", "Files", "SubstituicaoVegana.pdf")
	];
	const pdfContents = await FileTextModule.readPdfFilesToStrings(filePaths);
	const outputPath = path.resolve(__dirname, "..", "Files", "SubstituicaoVegana.txt");
	fs.writeFileSync(outputPath, pdfContents.join("\n\n"), "utf-8");
}

main();

// vai estar no BD do usuario:
const apiKey: string = "AIzaSyA941xEF5AccsmYtflct4hv8XNfLp0EQQE";

const apiCall = new GoogleApiCall(apiKey);
const content: string = "quais os 5 primeiros artigos da declaração dos direitos humanos?";

// async function processContent(prompt: string) {
// 	try {
// 		const fileChuncks = await FileTextModule.splitContentIntoChunks(fileContent, 300);
// 		const embbedings = await getContentEmbbedingList(fileChuncks);
// 		const index = await apiCall.calculateRetrievalQuery(embbedings, prompt)
// 		const answer = fileChuncks[index];
// 		const answerPrompt = `Reescreva o texto ${answer}, de modo a me dar apenas a resposta que eu busquei na
// 		pergunta original '${prompt}'.Essa resposta deve estar didática, como um professor explicando de maneira acessível. Casoalgum nome próprio seja incluído na resposta, ele não deve estar na resposta final.`
// 		const response = await apiCall.generateSimpleAnswer(answerPrompt);
// 		console.log(response);
// 	} catch (error) {
// 		console.error(error);
// 	 }
// }

// async function getContentEmbbedingList(fileContentChunks: string[]): Promise<number[][]> {
// 	const embeddingList: number[][] = [];
// 	for (const chunk of fileContentChunks) {
// 		const embedding = await apiCall.generateEmbeddings(chunk);
// 		embeddingList.push(embedding);
// 	}
// 	return embeddingList;
// }

// processContent(content);