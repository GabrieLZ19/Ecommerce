//styles
import "tailwindcss/tailwind.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <img src="./public/Logo.png" alt="logo" style={{ width: "100px" }} />

      <ul>
        <li>Productos</li>
        <li>Categorías</li>
        <li>Populares</li>
        <li>
          <img
            src="./public/search.svg"
            alt="search"
            style={{ cursor: "pointer" }}
          />
        </li>
        <li>
          <img
            src="./public/carrito.svg"
            alt="carrito"
            style={{ cursor: "pointer" }}
          />
        </li>
        <li>
          <button>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
