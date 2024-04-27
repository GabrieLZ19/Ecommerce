const Home: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-20 relative w-80 m-auto">
        <p className="bg-white p-1 w-80 text-center text-black font-bold border rounded-xl">
          Todo el poder en tus manos
        </p>
        <div className="bg-black border rounded-full w-5 h-5 absolute bottom-2 right-5"></div>
      </div>

      <h1 className="bg-gradient-to-r from-indigo-500">
        ¿Cual sera tu proxima experiencia?
      </h1>
      <p>
        Juega de forma portatil donde y cuando quieras
        <br />
        con nuestras consolas, tus horas de ocio estan aseguradas
      </p>
      <button>Registrate</button>
    </>
  );
};

export default Home;
