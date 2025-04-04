import { useState } from "react";
import style from "./Styles/Imutable.module.css";

interface User {
  name: string;
  age: number;
}

export function Imutable() {
  const [user, setUser] = useState<User>({ name: "john", age: 30 });
  // setUser cria um novo objeto e atribui a user
  // quando usamos objeto, cada alteração deve criar um objeto novo,
  // visto que useState faz uma copia rasa para verificar se mudou
  const handleNameChange = () => {
    setUser({ ...user, name: "jane" });
  };
  const handleAgeChange = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div className={style["container"]}>
      <h2 >Imutable State demo</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleNameChange}>Change name.</button>
      <button onClick={handleAgeChange}>Change age</button>
    </div>
  )
}