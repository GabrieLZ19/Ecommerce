"use client";

import { useState } from "react";

const AgregarProduct = () => {
  const [number, setNumber] = useState(1);

  const decrementNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div className="flex items-center">
      <button onClick={decrementNumber} className="bg-green-400 p-0 sm:p-2">
        -
      </button>
      <input
        type="text"
        value={number}
        className="text-center w-8 h-6 sm:w-20 sm:h-10 bg-transparent border border-green-400"
      />
      <button onClick={incrementNumber} className="bg-green-400 p-0 sm:p-2">
        +
      </button>
    </div>
  );
};

export default AgregarProduct;
