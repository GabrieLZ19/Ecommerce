import AgregarProduct from "@/components/AgregarProduct/AgregarProduct";
import Image from "next/image";

const Carrito = () => {
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
            <Image
              src="/Auriculares.png"
              alt="imagen"
              width="100"
              height="40"
            />
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

            <AgregarProduct />

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
