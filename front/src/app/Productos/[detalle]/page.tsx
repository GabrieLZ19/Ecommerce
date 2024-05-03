"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProductsById } from "@/helpers/products.helper";
import AgregarProduct from "@/components/AgregarProduct/AgregarProduct";
import { IProducto } from "@/interfaces/IProducto";

const Detalle = ({ params }: { params: { detalle: string } }) => {
  const [producto, setProducto] = useState<IProducto>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductsById(params.detalle);
        setProducto(productData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params.detalle]);

  return (
    <>
      <div className="flex justify-around mt-16 w-2/3 mx-auto ">
        <div className="">
          <img src={producto?.image} alt="Producto" />
        </div>
        <div className="border-l border-gray-600 px-10  w-1/2 flex flex-col items-start ">
          <div>
            <h1 className="mb-5 text-2xl">{producto?.name} </h1>
            <h2 className="mb-5 text-green-500">${producto?.price} </h2>
          </div>

          <AgregarProduct />

          <Link
            href="#"
            className="bg-purple-600 flex w-40 justify-center mt-5 rounded p-1"
          >
            Comprar
          </Link>
          <button className="border-2 border-purple-600 text-purple-600 mt-5 mr-10 rounded p-1 hover:text-white hover:bg-purple-600">
            Calcular Envio
          </button>
          <div className="relative">
            <Image
              src="/carrito.png"
              alt="carrito"
              width="20"
              height="20"
              className="absolute bottom-2 left-2"
            />

            <button className="border-2 border-purple-600 text-purple-600 mt-5 mr-10 rounded p-1 pl-8 hover:text-white hover:bg-purple-600">
              Agregar
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 w-2/3 mx-auto text-center text-sm">
        <p>{producto?.description} </p>
      </div>
    </>
  );
};

export default Detalle;
