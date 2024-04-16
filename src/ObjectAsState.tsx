import { useState } from "react";

type User = {
  name: string;
  age: number;
};

const Button = () => {
  const [user, setUser] = useState<User | null>(null);

  // if (user === null) return;

  const name = user?.name;

  return <button>Click me</button>;
};

export default Button;
