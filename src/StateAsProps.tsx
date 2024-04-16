type ButtonProps = {
  count: number;
};

const Button = ({ count }: ButtonProps) => {
  return <button>{count}</button>;
};

export default Button;
