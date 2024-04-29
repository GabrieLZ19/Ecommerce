"use client";

import Link from "next/link";
import { useState } from "react";

const Detalle = () => {
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
    <div className="flex justify-around mt-16 w-2/3 m-auto">
      <div>
        <img src="/Anbernic-RG35xx.png" alt="Producto" />
      </div>
      <div className="border-l border-gray-600 px-10  w-2/5 bg-cyan-300">
        <div>
          <h1 className="mb-5 text-2xl">Anbernic-RG35xx</h1>
          <h2 className="mb-5 ">Precio $3000</h2>
        </div>
        <div className="flex">
          <button onClick={decrementNumber} className="bg-green-400 px-2">
            -
          </button>
          <input
            type="text"
            value={number}
            className=" text-center bg-transparent w-28 border-green-400"
          />
          <button onClick={incrementNumber} className="bg-green-400 px-2">
            +
          </button>
        </div>

        <Link href="#" className="bg-red-400 flex w-32 justify-center mt-5">
          Comprar
        </Link>
        <button className="bg-blue-300 mt-5 mr-10">Calcular Envio</button>
        <button className="bg-red-400 w-32 ml-3">Agregar</button>
      </div>
    </div>
  );
};

export default Detalle;
