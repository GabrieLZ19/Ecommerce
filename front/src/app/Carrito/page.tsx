"use client";

import AgregarProduct from "@/components/AgregarProduct/AgregarProduct";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IProducto } from "@/interfaces/IProducto";
import { crearOrders } from "@/helpers/orders.helper";

import Swal from "sweetalert2";

interface ProductoEnCarrito extends IProducto {
  quantity: number;
}

const Carrito = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState<
    ProductoEnCarrito[]
  >([]);
  const [total, setTotal] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    const userSesion = localStorage.getItem("userSesion");
    if (!userSesion) {
      router.push("/");
    } else {
      const userData = JSON.parse(userSesion);
      const userId = userData.id;
      const carritoGuardado = localStorage.getItem(`Carrito_${userId}`);
      if (carritoGuardado) {
        const productos: ProductoEnCarrito[] = JSON.parse(carritoGuardado);
        setProductosEnCarrito(productos);
        calcularTotal(productos);
      }
    }
  }, []);

  const guardarCarrito = (carrito: ProductoEnCarrito[]) => {
    const userSesion = localStorage.getItem("userSesion");
    if (userSesion) {
      const userData = JSON.parse(userSesion);
      const userId = userData.id;

      localStorage.setItem(`Carrito_${userId}`, JSON.stringify(carrito));
    }
  };
  const calcularTotal = (carrito: ProductoEnCarrito[]) => {
    let totalCarrito = 0;
    carrito.forEach((producto) => {
      totalCarrito += producto.price * producto.quantity;
    });
    setTotal(totalCarrito);
  };

  const eliminarProducto = (index: number) => {
    let carrito = [...productosEnCarrito];
    carrito.splice(index, 1);
    guardarCarrito(carrito);
    setProductosEnCarrito(carrito);
  };

  const actualizarCantidad = (index: number, cantidad: number) => {
    let carrito = [...productosEnCarrito];
    carrito[index].quantity = cantidad;
    guardarCarrito(carrito);
    setProductosEnCarrito(carrito);
    calcularTotal(carrito);
  };

  const pagarProducts = async () => {
    try {
      const userSesion = localStorage.getItem("userSesion") as string;
      const userData = JSON.parse(userSesion);
      const userId = userData.id;

      const token = localStorage.getItem("userToken") as string;

      const productIds = productosEnCarrito.map((producto) => producto.id);

      await crearOrders(Array.from(productIds), token);

      localStorage.removeItem(`Carrito_${userId}`);
      setProductosEnCarrito([]);
      setTotal(0);

      Swal.fire({
        title: "¡Orden Creada!",
        text: "¡Pago realizado!",
        icon: "success",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
        footer: error.message,
      });
    }
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
        {productosEnCarrito.length === 0 ? (
          <div className="text-center mt-6">Carrito vacío</div>
        ) : (
          productosEnCarrito.map((producto, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-gray-500 mt-4 py-5"
            >
              <div className="flex items-center gap-4 w-2/5">
                <img
                  src={producto.image}
                  alt="imagen"
                  className="w-1/3 rounded-xl"
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
          ))
        )}
        <div className="mt-6 flex justify-end">
          <p className="font-medium flex justify-center items-center mr-10">
            Total: ${productosEnCarrito.length === 0 ? 0 : total}
          </p>
          <button
            className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg px-4 py-2"
            onClick={pagarProducts}
          >
            Pagar
          </button>
        </div>
      </div>
    </>
  );
};

export default Carrito;
