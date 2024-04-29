import Link from "next/link";
import { Carousel } from "flowbite-react";

const Carrusel = () => {
  return (
    <div className="flex justify-center items-center m-auto h-56 sm:h-80 xl:h-80 2xl:h-96 w-1/2 mt-10 relative">
      <Carousel>
        <Link href="/Productos">
          <img
            src="/Consola.webp"
            alt="Anbernic"
            className="w-96 m-auto hover:scale-105 transition-transform duration-300"
          />
          <p className="absolute top-8 p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl left-20">
            Consolas Portatiles
          </p>
        </Link>
        <Link href="/Productos">
          <img
            src="/Joystick.png"
            alt="Gamesir X2 Pro"
            className="w-96 m-auto hover:scale-105 transition-transform duration-300"
          />
          <p className="absolute top-8 p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl left-20">
            Joysticks
          </p>
        </Link>
        <Link href="/Productos">
          <img
            src="/Teclado.png"
            alt="Teclado Logitech Pop"
            className="w-96 m-auto hover:scale-105 transition-transform duration-300"
          />
          <p className="absolute top-8 p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl left-20">
            Teclados
          </p>
        </Link>
        <Link href="/Productos">
          <img
            src="/Mouse.png"
            alt="Mouse Logitech"
            className="w-96 m-auto hover:scale-105 transition-transform duration-300"
          />
          <p className="absolute top-8 p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl left-20">
            Mouse
          </p>
        </Link>
        <Link href="/Productos">
          <img
            src="/Auriculares.png"
            alt="Auriculares Razer"
            className="w-96 m-auto hover:scale-105 transition-transform duration-300"
          />
          <p className="absolute top-8 p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl left-20">
            Auriculares
          </p>
        </Link>
      </Carousel>
    </div>
  );
};

export default Carrusel;
