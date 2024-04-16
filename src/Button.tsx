import React from "react";

const Button = ({
  backgroundColor,
  fontSize,
}: {
  backgroundColor: string;
  fontSize: number;
}) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        fontSize: fontSize,
      }}
    >
      Click me
    </button>
  );
};

export default Button;
