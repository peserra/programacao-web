import './App.css';
import { GreetingList } from "./GreetingList";

export type User = {
  name: string;
  title: string;
}


export function App() {
  const users: User[] = [
    { title: "mr.", name: "john" },
    { title: "ms.", name: "jane" },
    { title: "ms.", name: "Diane" },
  ];
  return (
    <div className="app-body">
      <h1 className="app-title">My first React App!!!</h1>
      <p className="app-paragraph">
        Welcome to the world of react!!
      </p>
      <GreetingList users={users} />
    </div>
  );
}