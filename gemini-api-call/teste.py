import numpy as np
import google.generativeai as genai
import os
import time
import pickle

GOOGLE_API_KEY:str = "AIzaSyA941xEF5AccsmYtflct4hv8XNfLp0EQQE"
genai.configure(api_key=GOOGLE_API_KEY)

dir_path = "../Files/"


def cria_embedding_documentos(titulo, conteudo, modelo): 
    return genai.embed_content(model = modelo, 
                                     title = titulo, content = conteudo, task_type="RETRIEVAL_DOCUMENT")["embedding"]

def gera_e_consulta_pergunta(pergunta, modelo, documents):
    embeddings = []
    emb_path = "./obj_file.bin"
    with open(emb_path, '+ab') as f:
        if os.path.getsize(emb_path) == 0:
            print("----------------> Criou arquivo bin de embeddings")
            embeddings = [cria_embedding_documentos(titulo, conteudo, modelo) 
                        for titulo, conteudo in documents.items()]
            pickle.dump(embeddings, open('obj_file.bin', 'wb'))
        else:
            print("----------------> Carregou o arquivo bin de embeddings direto")
            embeddings = pickle.load(open('obj_file.bin', 'rb'))
    
    embedding_pergunta = genai.embed_content(model = modelo, 
                                             content = pergunta,
                                             task_type= "RETRIEVAL_QUERY")["embedding"]
    produtos_escalares = np.dot(np.stack(embeddings), embedding_pergunta)
    indice = np.argmax(produtos_escalares)
    return int(indice)

def main():
    start = time.time()
    files_in_directory:list = [file for file in os.listdir(dir_path) if file.endswith(".txt")]
    documents:dict = {}

    for file_name in files_in_directory:
        with open(f"{dir_path}{file_name}", "r+", encoding="utf-8") as file:
            documents[file_name.replace(".txt", "")] = file.read()

    modelo_embedding = "models/embedding-001"

    pergunta = "Como fazer um bolo de chocolate?"
    indice = gera_e_consulta_pergunta(pergunta, modelo_embedding, documents)
    resposta_busca_docs = list(documents.items())[indice][1]

    prompt = f"Reescreva esse texto como sendo um professor, de maneira bem didatica: {resposta_busca_docs}"
    modelo_generativo = genai.GenerativeModel("gemini-1.0-pro")
    resposta_generativa = modelo_generativo.generate_content(prompt)
    fim = time.time() - start
    print(f"\n{resposta_generativa.text}")
    print(f"Tempo: {fim}")


#print(embeddings)

if __name__ == "__main__":
    main()