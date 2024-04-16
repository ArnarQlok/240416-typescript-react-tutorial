import { useState } from "react";
import { type User } from "./types/types";

const Button = () => {
  const [user, setUser] = useState<User | null>(null);

  // if (user === null) return;

  const name = user?.name;

  return <button>Click me</button>;
};

export default Button;
