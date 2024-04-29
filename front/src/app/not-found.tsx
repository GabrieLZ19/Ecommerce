"use client";

import { useEffect } from "react";
import Link from "next/link";

const PageNotFound = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-purple-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Página no encontrada
      </h2>
      <p className="text-gray-600 mt-2">
        Serás redirigido al inicio en 5 segundos...
      </p>
    </div>
  );
};

export default PageNotFound;
