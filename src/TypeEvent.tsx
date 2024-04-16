const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  console.log("clicked");
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  return e.target.value;
};

const Button = () => {
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <input type="text" onChange={handleChange} />
    </>
  );
};

export default Button;
