import React, { memo, useMemo, useState } from "react";

const ChildComp = memo(() => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(100);
  const products = [
    {
      name: "iphone",
      id: 1,
    },
    {
      name: "samsung",
      id: 2,
    },
  ];

  const filteredValue = useMemo(
    () =>
      products.filter((item) => {
        console.log("filter comp rendered");
        return item.name.includes(inputValue);
      }),
    [inputValue]
  );
  console.log("child component rendered");
  return (
    <div>
      <h2> ChildComp</h2>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <input type='text' onChange={(e) => setInputValue(e.target.value)} />
      {filteredValue.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
});

export default ChildComp;
