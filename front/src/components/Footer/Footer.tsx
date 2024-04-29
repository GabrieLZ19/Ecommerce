const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-black border-t border-gray-600 pt-5 mt-10">
      <div className="container mx-auto flex flex-row items-center justify-around">
        <div>
          <h3 className="text-3xl relative bottom-20 right-12">Astral</h3>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Acerca de</h3>
          <ul className="mt-2">
            <li className="mt-5 text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Historia
              </a>
            </li>
            <li className="mt-5 text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Empleo
              </a>
            </li>
            <li className="mt-5 text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Inversores
              </a>
            </li>
            <li className="mt-5 text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Valores</h3>
          <ul className="mt-2">
            <li className="mt-5 text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Impacto Social
              </a>
            </li>
            <li className="mt-5 text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Sostenibilidad
              </a>
            </li>
            <li className="mt-5 text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Reciclaje
              </a>
            </li>
            <li className="mt-5 text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center w-4/5 border-t border-gray-500 m-auto mt-10 pb-10 ">
        <img src="/Facebook.png" alt="Facebook" className="mt-10 mx-5 w-8" />
        <img src="/GitHub.png" alt="GitHub" className="mt-10 mx-5 w-8" />
        <img src="/Instagram.png" alt="Instagram" className="mt-10 mx-5 w-8" />
      </div>
    </footer>
  );
};

export default Footer;
