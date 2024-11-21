import React, { useState } from "react";

function Products({ name, data }) {
  const [a, b] = useState(false);
  return (
    <div className="text-white w-full bg-zinc-900 h-60 p-5">
      <h1>{name}</h1>
      <h4 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>
        {a === false ? "Hello" : "hey"}
      </h4>
      <button
        onClick={() => {
          b(!a);
        }}
      >Change</button>
    </div>
  );
}

export default Products;

