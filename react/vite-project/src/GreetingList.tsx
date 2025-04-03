import { Greeting } from "./Greeting";
import { User } from "./App";

interface GreetingListProps {
  users: User[];
}

export function GreetingList({ users }: GreetingListProps) {
  return (
    <div>
      {users.map((user, index) => (
        <Greeting key={index} title={user.title} name={user.name} />
      ))}
    </div>
  );
}