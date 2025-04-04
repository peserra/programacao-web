import './Styles/App.css';
import { ClickCounter } from './ClickCounter';
import { GreetingList } from "./GreetingList";
import { Imutable } from './Imutable';
import { FetchUser } from './FetchUser';

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
      <ClickCounter />
      <FetchUser />
    </div>
  );
}