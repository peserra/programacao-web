import { useState, useEffect } from "react";

interface UserData {
  name: string;
  username: string;
  email: string;
}

export function FetchUser() {
  const [user, setUser] = useState<UserData | null>(null);
  const [id, setId] = useState(1);

  const genRandomId = () => {
    setId(Math.floor(Math.random() * 10) + 1);
  };

  useEffect(() => {
    // abort signal, protege se o componente for desfeito durante requisicao
    const controller = new AbortController();
    const signal = controller.signal;
    // fetch user from data API
    // renderiza apenas quando a dependencia do array de dependencias muda
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
      .then((response) => response.json())
      .then((data) => { setUser(data); })
      .catch((error) => {
        console.log(`unable to fetch user data. Error ${error}`);
        setUser(null);
      });
    // cleanup function
    return () => { controller.abort() };
  }, [id]);
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>User not found.</p>
      )}
      <button onClick={genRandomId}>Load random user.</button>
    </div>
  );

}