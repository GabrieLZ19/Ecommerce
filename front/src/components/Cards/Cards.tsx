import { IProducto } from "@/interfaces/IProducto";
import Link from "next/link";

const Cards: React.FC<IProducto> = ({
  name,
  description,
  price,
  stock,
  image,
  categoryId,
}) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-md">
      <img src={image} alt={name} className="w-full h-auto rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2" style={{ color: "#624DE3" }}>
          {name}
        </h2>
        <p className="mb-2">{categoryId} </p>
        <p className="text-gray-300 mb-2 text-xs">{description}</p>
        <p className="text-green-300 font-bold">${price}</p>
        <p className="text-gray-300 mt-2">Stock: {stock}</p>
        <Link href="#">
          <button className="border-2 border-orange-400 text-orange-400 px-4 py-2 rounded-md mt-4 ">
            Comprar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
