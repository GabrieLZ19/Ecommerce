"use client";

import { useState } from "react";

const Carrito = () => {
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
    <>
      <div className="mx-auto max-w-4xl px-4 mb-52 mt-20">
        <div className="flex justify-between border-b border-gray-500 mt-6">
          <p className="font-medium">Producto</p>
          <div className="flex justify-between w-1/2">
            <p className="font-medium">Precio</p>
            <p className="font-medium">Cantidad</p>
            <p className="font-medium">Total</p>
          </div>
        </div>
        <div className="flex justify-between border-b border-gray-500 mt-4">
          <div className="flex items-center gap-4 w-2/5">
            <img src="/Auriculares.png" alt="imagen" className="w-24 sm:w-32" />
            <div>
              <p className="text-xs sm:text-xl font-medium">
                Nombre del producto
              </p>
              <p className="text-sm text-purple-600 hover:underline hover:cursor-pointer">
                Eliminar
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-1/2 gap-1 mt-2 sm:mt-0 ">
            <p className="text-xs sm:text-xl">$Precio</p>
            <div className="flex items-center">
              <button
                onClick={decrementNumber}
                className="bg-green-400 p-0 sm:p-2"
              >
                -
              </button>
              <input
                type="text"
                value={number}
                className="text-center w-8 h-6 sm:w-20 sm:h-10 bg-transparent border border-green-400"
              />
              <button
                onClick={incrementNumber}
                className="bg-green-400 p-0 sm:p-2"
              >
                +
              </button>
            </div>
            <p className="text-xs sm:text-xl">$Total</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg px-4 py-2">
            Pagar
          </button>
        </div>
      </div>
    </>
  );
};

export default Carrito;
