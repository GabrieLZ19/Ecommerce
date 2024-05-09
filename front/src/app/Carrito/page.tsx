"use client";

import AgregarProduct from "@/components/AgregarProduct/AgregarProduct";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Carrito = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const userSesion = localStorage.getItem("userSesion");
    if (userSesion) {
      const userData = JSON.parse(userSesion);
      const userId = userData.id;
      console.log(userId);

      const carritoGuardado = localStorage.getItem(`Carrito_${userId}`);

      if (carritoGuardado) {
        const productos = JSON.parse(carritoGuardado);
        setProductosEnCarrito(productos);
        calcularTotal(productos);
      }
    }
  }, []);

  const guardarCarrito = (carrito: any) => {
    const userSesion = localStorage.getItem("userSesion");
    if (userSesion) {
      const userData = JSON.parse(userSesion);
      const userId = userData.id;

      localStorage.setItem(`Carrito_${userId}`, JSON.stringify(carrito));
    }
  };

  const eliminarProducto = (index: number) => {
    let carrito = [...productosEnCarrito];
    carrito.splice(index, 1);
    guardarCarrito(carrito);
    setProductosEnCarrito(carrito);
  };

  const calcularTotal = (carrito: any) => {
    let totalCarrito = 0;
    carrito.forEach((producto: any) => {
      totalCarrito += producto.price * producto.quantity;
    });
    setTotal(totalCarrito);
  };

  const actualizarCantidad = (index, cantidad) => {
    let carrito = [...productosEnCarrito];
    carrito[index].quantity = cantidad;
    guardarCarrito(carrito);
    setProductosEnCarrito(carrito);
    calcularTotal(carrito);
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
        {productosEnCarrito.map((producto, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-gray-500 mt-4 py-5"
          >
            <div className="flex items-center gap-4 w-2/5">
              <img
                src={producto?.image}
                alt="imagen"
                className="w-1/3
                rounded-xl"
              />
              <div>
                <p className="text-xs sm:text-xl font-medium">
                  {producto.name}
                </p>
                <p
                  onClick={() => eliminarProducto(index)}
                  className="text-sm text-purple-600 hover:underline hover:cursor-pointer"
                >
                  Eliminar
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-1/2 gap-1 mt-2 sm:mt-0 ">
              <p className="text-xs sm:text-xl">${producto.price}</p>
              <AgregarProduct
                cantidad={producto.quantity}
                actualizarCantidad={(cantidad: number) =>
                  actualizarCantidad(index, cantidad)
                }
              />
              <p className="text-xs sm:text-xl">
                ${producto.price * producto.quantity}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-6 flex justify-end">
          <p className="font-medium flex justify-center items-center mr-10">
            Total: ${total}
          </p>
          <button className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg px-4 py-2">
            Pagar
          </button>
        </div>
      </div>
    </>
  );
};

export default Carrito;
