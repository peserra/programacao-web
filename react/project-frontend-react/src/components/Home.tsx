import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <div className={styles.selection}>
        <h5>Selecione a refeição desejada e selecione seus cardapios</h5>
        <div class-name="input-group">
          <select id="dropdown">
            <option value="desjejum">Desjejum</option>
            <option value="lanche-manha">Lanche da manhã</option>
            <option value="almoco">Almoço</option>
            <option value="lanche-tarde">Lanche da tarde</option>
            <option value="jantar">Jantar</option>
          </select>
          <input type="file" id="file" multiple />
        </div>
      </div>

      <button id="submitButton">Criar!</button>
      <div className={styles.outputBox}></div>
    </div>
  );
}