import Image from "next/image";
import Link from "next/link";

const Registro = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start mx-4 md:mx-40 mb-10 md:mb-20  md:mt-20 sm:mt-0 ">
      <div className="flex flex-col md:w-1/2 md:ml-20 mt-10 md:mt-0 relative text-center md:text-left ">
        <h1 className="text-4xl mb-5">Sign Up to</h1>
        <p className="text-2xl mb-8">Astral </p>
        <p className="text-sm mb-8">
          If you already have an account <br />
          <br />
          You can
          <Link href="/Login" className="text-purple-600 pl-2 hover:underline">
            Login here!
          </Link>
        </p>
        <div className="md:absolute left-52 ">
          <Image src="/Persona.png" alt="Persona" width="200" height="60" />
        </div>
      </div>

      <form className="flex flex-col w-full md:w-auto mt-10 md:mt-0">
        <h1 className="text-xl mb-5">Sign Up</h1>
        <input
          type="email"
          placeholder="Enter Email"
          className="rounded-md mb-3"
        />
        <input
          type="text"
          placeholder="Create User name"
          className="rounded-md mb-3"
        />
        <input
          type="number"
          placeholder="Contact number"
          className="rounded-md mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-md mb-3"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="rounded-md mb-3"
        />
        <button className="bg-purple-700 rounded-md p-2 mt-2 mb-10 shadow-md shadow-purple-500/50 w-full md:w-auto">
          Register
        </button>
        <p className="text-center  text-xs text-gray-300">or continue with</p>
        <div className="flex justify-center  mt-5">
          <Image
            src="/FacebookLogin.png"
            alt="Facebook"
            width={20}
            height={20}
            className="cursor-pointer mr-4"
          />
          <Image
            src="/Google.png"
            alt="Google"
            width={20}
            height={20}
            className="cursor-pointer mr-4"
          />
          <Image
            src="/GitHub.png"
            alt="GitHub"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Registro;
