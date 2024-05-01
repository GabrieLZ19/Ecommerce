"use client";

import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { IProducto } from "@/interfaces/IProducto";

const GridCards: React.FC = () => {
  const [products, setProducts] = useState<IProducto[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("http://localhost:3000/products/");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error, no se encontro los productos:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-black p-4">
      {products.map((product) => (
        <Cards key={product.id} {...product} />
      ))}
    </div>
  );
};

export default GridCards;
