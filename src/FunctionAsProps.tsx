// type ButtonProps = {
//   handleClick: () => void;
// };

type ButtonProps = {
  handleClick: (test: string) => number;
};

const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={() => handleClick("hej")}>Click me</button>;
};

export default Button;
