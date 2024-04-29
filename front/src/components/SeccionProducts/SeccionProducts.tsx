const SeccionProducts = () => {
  return (
    <div className="flex justify-around w-2/3 m-auto mt-16 mb-16">
      <div className="w-60">
        <p className="bg-gray-500 text-center rounded ">Retro</p>
        <img
          src="/Anbernic-RG35xx.png"
          alt="Anbernic RG35XX"
          className="w-52 mt-5"
        />
        <h1 className="bg-gradient-to-r from-pink-200 to-purple-500 bg-clip-text text-transparent mt-2">
          Anbernic RG35xx
        </h1>
        <p className="text-xs mt-3">
          La RG35XX viene con una tarjeta TF de 64 G precargada 5570 juegos
        </p>
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 p-3 mt-3 rounded-xl">
          Descubrir
        </button>
      </div>
      <div className="w-60">
        <p className="bg-gray-500 text-center rounded ">Moderno</p>
        <img src="/SteamDeck.png" alt="Steam Deck" className="w-96 mt-5" />
        <h1 className="bg-gradient-to-r from-pink-200 to-purple-500 bg-clip-text text-transparent">
          Steam Deck
        </h1>
        <p className="text-xs mt-3">
          Un dispositivo de juego potente y portátil, diseñado para un uso
          cómodo y una experiencia similar a la de una consola.
        </p>
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 p-3 mt-3 rounded-xl">
          Descubrir
        </button>
      </div>
      <div className="w-60">
        <p className="bg-gray-500 text-center rounded">Hibrido</p>
        <img
          src="/NintendoSwitch.png"
          alt="Nintendo Switch"
          className="w-96 mt-5"
        />
        <h1 className="bg-gradient-to-r from-pink-200 to-purple-500 bg-clip-text text-transparent mt-3">
          Nintendo Switch
        </h1>
        <p className="text-xs mt-3">
          Nintendo Switch se transforma para adaptarse a tu situación y te
          permite jugar a los títulos que quieras aunque no tengas mucho tiempo.
          Es una nueva era en la que no tienes que adaptar tu vida a los
          videojuegos: ahora es la consola la que se adapta a tu vida.
        </p>
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 p-3 mt-3 rounded-xl">
          Descubrir
        </button>
      </div>
    </div>
  );
};

export default SeccionProducts;
