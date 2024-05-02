import Cards from "../Cards/Cards";

import { getProducts } from "@/helpers/products.helper";

const GridCards: React.FC = async () => {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-black p-4">
      {products.map((product) => (
        <Cards key={product.id} {...product} />
      ))}
    </div>
  );
};

export default GridCards;
