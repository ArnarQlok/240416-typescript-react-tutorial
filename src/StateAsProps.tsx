// import { Dispatch, SetStateAction } from "react";

type ButtonProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ count, setCount }: ButtonProps) => {
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default Button;
