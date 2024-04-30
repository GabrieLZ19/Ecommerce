import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start mx-4 md:px-40 mb-10 md:mb-20 md:mt-20">
      <div className="flex flex-col md:w-1/2 md:ml-20 mt-10 md:mt-0 relative text-center md:text-left">
        <h1 className="text-4xl mb-5">Sign in to</h1>
        <p className="text-2xl mb-8">Astral </p>
        <p className="text-sm mb-8">
          If you already have an account <br />
          <br />
          You can
          <Link
            href="/Registro"
            className="text-purple-600 pl-2 hover:underline"
          >
            Register here!
          </Link>
        </p>
        <div className="md:absolute left-40 top-0">
          <Image src="/Persona.png" alt="Persona" width="200" height="60" />
        </div>
      </div>

      <form className="flex flex-col w-full md:w-auto mt-10 md:mt-0">
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
        <p className="text-xs text-right text-gray-500 mb-5">
          Forgot password?
        </p>

        <button className="bg-purple-700 rounded-md p-2 mt-2 mb-10 shadow-md shadow-purple-500/50 w-full md:w-auto">
          Login
        </button>
        <p className="text-center md:text-left text-xs text-gray-300">
          or continue with
        </p>
        <div className="flex justify-center md:justify-start mt-5">
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

export default Login;
