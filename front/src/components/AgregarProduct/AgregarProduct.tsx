"use client";

import { useState, useEffect } from "react";

const AgregarProduct = ({ cantidad, actualizarCantidad }: any) => {
  const [number, setNumber] = useState(cantidad || 1);

  useEffect(() => {
    setNumber(cantidad || 1);
    actualizarCantidad(cantidad || 1);
  }, [cantidad]); //se ejecuta cada vez que cambia la cantidad inicial

  const decrementNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
      actualizarCantidad(number - 1);
    }
  };

  const incrementNumber = () => {
    setNumber(number + 1);
    actualizarCantidad(number + 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(event.target.value);
    if (!isNaN(newNumber) && newNumber >= 1) {
      setNumber(newNumber);
      actualizarCantidad(newNumber);
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={decrementNumber} className="bg-green-400 p-0 sm:p-2">
        -
      </button>
      <input
        type="text"
        value={number}
        readOnly
        onChange={handleChange}
        className="text-center w-8 h-6 sm:w-20 sm:h-10 bg-transparent border border-green-400"
      />
      <button onClick={incrementNumber} className="bg-green-400 p-0 sm:p-2">
        +
      </button>
    </div>
  );
};

export default AgregarProduct;
