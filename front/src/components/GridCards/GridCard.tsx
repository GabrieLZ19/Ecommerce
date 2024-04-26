import { productsToPreLoad } from "../../helpers/productos";
import Cards from "../Cards/Cards";

const GridCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-black p-4">
      {productsToPreLoad?.map((product) => (
        <Cards key={product.id} {...product} />
      ))}
    </div>
  );
};

export default GridCards;
