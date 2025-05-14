import { error } from "console";
import * as fs from "fs";
import * as path from "path";
import pdfParse from "pdf-parse";

export class FileTextModule {
  static async splitContentIntoChunks(content: string, chunkSize: number): Promise<string[]> {
    const chunks: string[] = [];
    for (let i = 0; i < content.length; i += chunkSize) {
      chunks.push(content.slice(i, i + chunkSize));
    }
    return chunks;
  }

  static async readPdfFilesToStrings(pdfFilePaths: string[]): Promise<string[]> {
    console.log(`${pdfFilePaths}`)
    const results: string[] = [];

    for (const filePath of pdfFilePaths) {
      try {
        const file = fs.readFileSync(filePath);
        const data = await pdfParse(file);
        console.log(data.text);
        results.push(data.text);
      } catch (error) {
        console.error(error);
      }
    }
    return results;
  }
}