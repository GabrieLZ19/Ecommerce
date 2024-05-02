"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

const Registro = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    telefono: "",
    address: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    Swal.fire({
      title: "Good job!",
      text: "Registro exitoso!",
      icon: "success",
    });
  };

  const isFormValid = () => {
    return (
      form.email !== "" &&
      form.name !== "" &&
      form.telefono !== "" &&
      form.address !== "" &&
      form.password !== ""
    );
  };

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

      <form
        className="flex flex-col  w-full md:w-auto mt-10 md:mt-0"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl mb-5">Sign Up</h1>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="rounded-md mb-3 text-black"
          required
        />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter name"
          className="rounded-md mb-3 text-black"
          required
        />
        <input
          type="number"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          placeholder="Contact number"
          className="rounded-md mb-3 text-black"
          required
        />
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter address"
          className="rounded-md mb-3 text-black"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="rounded-md mb-3 text-black"
          required
        />

        <button
          className="bg-purple-700 rounded-md p-2 mt-2 mb-10 shadow-md shadow-purple-500/50 w-full md:w-auto disabled:bg-gray-500 disabled:shadow-none"
          disabled={!isFormValid()}
        >
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