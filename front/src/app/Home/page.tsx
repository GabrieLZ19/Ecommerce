import Carrusel from "@/components/Carrusel/Carrusel";
import SeccionProducts from "@/components/SeccionProducts/SeccionProducts";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-20 relative w-80 m-auto">
        <p className="bg-white p-1 w-80 text-center text-black font-bold border rounded-xl">
          Todo el poder en tus manos
        </p>
        <div className="bg-black border rounded-full w-5 h-5 absolute bottom-2 right-5"></div>
      </div>

      <h1 className="bg-gradient-to-r from-pink-200 to-purple-500 bg-clip-text text-transparent text-4xl text-center mt-5">
        ¿Cual sera tu proxima experiencia?
      </h1>
      <p className="text-center text-sm mt-3">
        Juega de forma portatil donde y cuando quieras
        <br />
        con nuestras consolas, tus horas de ocio estan aseguradas
      </p>
      <SeccionProducts />
      <Carrusel />
    </>
  );
};

export default Home;
