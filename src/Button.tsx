import { Color } from "./types/types";

type ButtonProps = {
  backgroundColor: Color;
  fontSize: number | string;
  isRounded?: boolean;
  color: Color;
  padding: number[];
};

// interface ButtonProps {
//   backgroundColor: string;
//   fontSize: number;
//   isRounded?: boolean;
//   color: string;
//   padding: number[];
// }

const Button = ({
  backgroundColor,
  fontSize,
  isRounded,
  color,
  padding,
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        fontSize: `${fontSize}rem`,
        borderRadius: isRounded ? "20px" : 0,
        color: color,
        padding: `${padding[0]}px ${padding[1]}px`,
      }}
    >
      Click me
    </button>
  );
};

export default Button;
