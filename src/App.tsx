import { useState } from "react";

import "./App.css";
import Button from "./Button";
import FunctionAsProps from "./FunctionAsProps";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const [user, setUser] = useState(null);

  const handleClick = (test: string) => {
    return 5;
  };

  return (
    <>
      {/* <Button
        backgroundColor="red"
        fontSize={2}
        isRounded={true}
        color="black"
        padding={[20, 40]}
      /> */}
      <FunctionAsProps handleClick={handleClick} />
    </>
  );
}

export default App;
