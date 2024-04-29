"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = () => {
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    setShowCategories(false);
  };

  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-around text-white border-b border-gray-600">
      <div className="flex items-center justify-between w-full md:w-auto px-4 py-2">
        <Link href="/Home">
          <img src="/Logo.png" alt="logo" className="w-20" />
        </Link>
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? "Cerrar" : "Menu"}
        </button>
      </div>

      <div
        className={`md:flex ${
          menuOpen ? "flex" : "hidden"
        } w-full md:w-80% flex-col md:flex-row md:justify-around md:items-center`}
      >
        <ul className="flex flex-col items-center w-full px-4 py-2 md:flex-row  md:justify-around md:items-center md:w-1/2 ">
          <li className="py-2">Productos</li>

          <li
            className="py-2 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Categorías
            {showCategories && (
              <ul className="absolute bg-gray-900 p-4 rounded-md mt-2">
                <li className="py-2 text-sm text-gray-300 hover:underline">
                  Consolas
                </li>
                <li className="py-2 text-sm text-gray-300 hover:underline">
                  Joysticks
                </li>
                <li className="py-2 text-sm text-gray-300 hover:underline">
                  Telefonos
                </li>
                <li className="py-2 text-sm text-gray-300 hover:underline">
                  Mouse
                </li>
                <li className="py-2 text-sm text-gray-300 hover:underline">
                  Teclados
                </li>
                <li className="py-2 text-sm text-gray-300 hover:underline">
                  Memorias
                </li>
              </ul>
            )}
          </li>

          <li className="py-2">Populares</li>
        </ul>

        <div className="relative flex items-center justify-center  w-64 m-auto">
          <input
            type="text"
            className="rounded bg-transparent border pr-7 py-1 text-sm"
          />
          <img
            src="/search.svg"
            alt="search"
            className="absolute right-20 h-8 cursor-pointer p-2 right-5 "
          />
        </div>

        <div className="pt-5 flex items-center justify-center md:pt-0 md:mr-40">
          <img src="/carrito.svg" alt="carrito" />
        </div>
        <div className="flex justify-center pt-5 md:pt-0">
          <button className="bg-gradient-to-r from-violet-600 to-indigo-600 p-2 rounded-2xl mb-5 md:mb-0 md:mr-10">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
