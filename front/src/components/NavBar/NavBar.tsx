"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userToken, setUserToken] = useState();
  const [userSesion, setUserSesion] = useState();

  useEffect(() => {
    const userTokens = localStorage.getItem("userToken");
    if (userTokens !== null) {
      setUserToken(userTokens);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("Carrito");
    localStorage.removeItem("userSesion");
    setShowDropdown(false);

    setUserToken(null);
    setUserSesion(null);
    router.push("/");
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
        <Link href="/">
          <Image src="/Logo.png" alt="logo" width={60} height={20} />
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
          <Link href="/Productos">
            <li className="py-2">Productos</li>{" "}
          </Link>

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

          <li className="py-2">Dashboard</li>
        </ul>

        <div className="relative flex items-center justify-center  w-64 m-auto">
          <input
            type="text"
            className="rounded bg-transparent border pr-7 py-1 text-sm"
          />
          <Image
            src="/search.svg"
            alt="search"
            width={38}
            height={40}
            className="absolute  cursor-pointer p-2 right-5 "
          />
        </div>

        {userToken && (
          <div className="pt-5 flex items-center justify-center md:pt-0 md:mr-40">
            <Link href="/Carrito">
              <Image src="/carrito.png" alt="carrito" width={20} height={20} />
            </Link>
          </div>
        )}

        <div className="flex flex-col items-center justify-center pt-5 md:pt-0 md:mr-10 relative">
          <button
            className="p-2 rounded-full shadow-md  mb-5 md:mb-0 md:mr-10"
            onClick={toggleDropdown}
          >
            <Image src="/usuario.webp" alt="usuario" width="30" height="30" />
          </button>

          {showDropdown && (
            <>
              {userToken && userSesion && (
                <p className="text-white relative right-3">
                  {userSesion?.name}
                </p>
              )}

              <div className="absolute right-22 top-20 md:top-14 md:right-0 mt-4  overflow-hidden z-10 w-28 text-center bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg shadow-purple-500/50 ">
                {userToken ? (
                  <button
                    type="submit"
                    onClick={handleLogOut}
                    className="p-2 text-gray-800 hover:bg-purple-400 w-28"
                  >
                    Log out
                  </button>
                ) : (
                  <Link href="/Login">
                    <button className="p-2 text-gray-800 hover:bg-purple-400 w-28">
                      Log in
                    </button>
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
