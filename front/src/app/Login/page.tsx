import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex justify-evenly px-40 mb-60 ">
      <div className="flex flex-col ml-20 mt-32 w-1/2 relative ">
        <h1 className="text-4xl mb-5">Sign in to</h1>
        <p className="text-2xl mb-12">Astral </p>
        <p className="text-xs">
          If you already have an account <br />
          <br />
          You can
          <Link
            href="/Registro"
            className="text-purple-600 pl-2 hover:underline"
          >
            Register here !
          </Link>
        </p>
        <div className="absolute left-40">
          <Image src="/Persona.png" alt="Persona" width="200" height="60" />
        </div>
      </div>

      <form className="flex flex-col mt-10">
        <h1 className="text-xl mb-5">Sign In</h1>
        <input
          type="email"
          placeholder="Enter email or username"
          className="rounded-md mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-md mb-3"
        />
        <p className="text-xs text-end text-gray-500 mb-5">Forgor password?</p>

        <button className="bg-purple-700 rounded-md p-2 mt-2 mb-10 shadow-md shadow-purple-500/50 ;">
          Login
        </button>
        <p className="text-center text-xs text-gray-300">or continue with</p>
        <div className="flex justify-evenly mt-5">
          <Image
            src="/FacebookLogin.png"
            alt="Facebook"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/Google.png"
            alt="Google"
            width={20}
            height={20}
            className="cursor-pointer"
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

export default Login;
