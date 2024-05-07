"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { validarLogin } from "@/helpers/validarForm";
import { LoginUser } from "@/helpers/users.helper";
import Swal from "sweetalert2";
import { IToken } from "@/interfaces/IToken";
import { ILogin } from "@/interfaces/ILogin";

const Login = ({ setToken }: IToken) => {
  const router = useRouter();

  const [form, setForm] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [errorUser, setErrorUser] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [touchedFields, setTouchedFields] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const isDisabled = !form.email || !form.password;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setTouchedFields({ ...touchedFields, [name]: true });
  };

  useEffect(() => {
    const errors = validarLogin(form);

    setErrorUser(errors);
  }, [form]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await LoginUser(form, setToken);

      router.push("/");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
        footer: error.message,
      });
    }
  };

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
        <div className="md:absolute left-52">
          <Image src="/Persona.png" alt="Persona" width="200" height="60" />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full md:w-auto mt-10 md:mt-0"
      >
        <h1 className="text-xl mb-5">Sign In</h1>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="rounded-md mb-3 text-black"
          required
        />
        {touchedFields.email && errorUser.email && <p> {errorUser.email} </p>}

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="rounded-md mb-3 text-black pr-10 w-full"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent"
          >
            <Image
              src={showPassword ? "/ver.png" : "/no-ver.png"}
              alt="ver"
              width={25}
              height={30}
              className="cursor-pointer mb-2"
            />
          </button>
        </div>

        {touchedFields.password && errorUser.password && (
          <p> {errorUser.password} </p>
        )}

        <p className="text-xs text-right text-gray-500 mb-5">
          Forgot password?
        </p>

        <button
          disabled={isDisabled}
          className="bg-purple-700 rounded-md p-2 mt-2 mb-10 shadow-md shadow-purple-500/50 w-full md:w-auto disabled:bg-gray-500 disabled:shadow-none"
        >
          Login
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

export default Login;
