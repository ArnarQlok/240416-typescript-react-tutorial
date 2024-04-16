import { useState } from "react";

import "./App.css";
import Button from "./Button";
import FunctionAsProps from "./FunctionAsProps";
import StateAsProps from "./StateAsProps";
import ChildrenAsProps from "./ChildrenAsProps";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

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
      {/* <FunctionAsProps handleClick={handleClick} /> */}
      {/* <StateAsProps count={count} setCount={setCount} /> */}
      <ChildrenAsProps>Hej hallå</ChildrenAsProps>
    </>
  );
}

export default App;
