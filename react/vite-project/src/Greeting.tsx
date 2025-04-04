import style from './Styles/Greeting.module.css';
type GreetingProps = {
  title: string;
  name: string;
}

export function Greeting(props: GreetingProps) {
  return (
    <p className={style.greeting}>
      Hello, {props.title} {props.name}!
    </p>
  );
}