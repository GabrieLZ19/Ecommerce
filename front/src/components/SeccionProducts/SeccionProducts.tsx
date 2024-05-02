import Image from "next/image";

const SeccionProducts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-10 my-16">
      <div className="w-full">
        <p className="bg-gray-500 text-center rounded ">Retro</p>
        <div className="w-full h-40 relative">
          <Image
            src="/Anbernic-RG35xx.png"
            alt="Anbernic RG35XX"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="bg-gradient-to-r from-pink-200 to-purple-500 bg-clip-text text-transparent mt-2 text-center">
          Anbernic RG35xx
        </h1>
        <p className="text-xs mt-3">
          La RG35XX viene con una tarjeta TF de 64 G precargada 5570 juegos
        </p>
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 p-3 mt-3 rounded-xl w-full">
          Descubrir
        </button>
      </div>
      <div className="w-full">
        <p className="bg-gray-500 text-center rounded ">Moderno</p>
        <div className="w-full h-40 relative">
          <Image
            src="/SteamDeck.png"
            alt="Steam Deck"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="bg-gradient-to-r from-pink-200 to-purple-500 bg-clip-text text-transparent text-center">
          Steam Deck
        </h1>
        <p className="text-xs mt-3">
          Un dispositivo de juego potente y portátil, diseñado para un uso
          cómodo y una experiencia similar a la de una consola.
        </p>
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 p-3 mt-3 rounded-xl w-full">
          Descubrir
        </button>
      </div>
      <div className="w-full">
        <p className="bg-gray-500 text-center rounded">Híbrido</p>
        <div className="w-full h-40 relative">
          <Image
            src="/NintendoSwitch.png"
            alt="Nintendo Switch"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="bg-gradient-to-r from-pink-200 to-purple-500 bg-clip-text text-transparent mt-3 text-center">
          Nintendo Switch
        </h1>
        <p className="text-xs mt-3">
          Nintendo Switch se transforma para adaptarse a tu situación y te
          permite jugar a los títulos que quieras aunque no tengas mucho tiempo.
          Es una nueva era en la que no tienes que adaptar tu vida a los
          videojuegos: ahora es la consola la que se adapta a tu vida.
        </p>
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 p-3 mt-3 rounded-xl w-full">
          Descubrir
        </button>
      </div>
    </div>
  );
};

export default SeccionProducts;
