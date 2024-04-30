import { IProducto } from "@/interfaces/IProducto";
import Link from "next/link";

const Cards: React.FC<IProducto> = ({
  id,
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

        <p className="text-green-300 font-bold">${price}</p>
        <p className="text-gray-300 mt-2">Stock: {stock}</p>
        <Link href={`/Productos/${id}`} key={name}>
          <button className="border-2 border-orange-400 text-orange-400 px-4 py-2 rounded-xl mt-4 mr-5">
            Mas detalles
          </button>
        </Link>

        <button className=" border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-xl mt-4  hover:bg-purple-500">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Cards;
