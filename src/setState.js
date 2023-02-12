function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    // setCounter(counter + 1);
    setCounter((current) => current + 1);
  };
  return (
    <div>
      <h3>Total Clicks: {counter}</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
