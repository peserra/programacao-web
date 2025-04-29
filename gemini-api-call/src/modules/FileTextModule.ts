export class FileTextModule {
  static async splitContentIntoChunks(content: string, chunkSize: number): Promise<string[]> {
    const chunks: string[] = [];
    for (let i = 0; i < content.length; i += chunkSize) {
      chunks.push(content.slice(i, i + chunkSize));
    }
    return chunks;
  }
}