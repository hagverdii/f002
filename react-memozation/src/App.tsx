import ChildComp from "./components/child-comp";

const App = () => {
  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState("");
  console.log("parent comp rendereddddd");
  return (
    <>
      {/* <h2>Parent Component</h2>
      <p>my count {count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button> */}

      <ChildComp />
    </>
  );
};

export default App;
