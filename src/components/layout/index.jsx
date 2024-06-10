import logo from "../../assets/logoSquad (1).png";
import { FiAlignJustify } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const Header = () => {
    return (
      <header className="flex items-center justify-between w-[100%] pr-[15vw] pl-[15vw]">
        <img src={logo} alt="logo" className="m-0 mt-auto mb-auto" />
        <button id="usuario" className="flex items-center gap-1">
          <h1>Sair</h1>
          <FiChevronDown />
        </button>
      </header>
    );
  };

  const Footer = () => {
    return (
      <footer className="flex w-full m-auto justify-between pr-[5vw] pl-[5vw] pb-[13vh] pt-[13vh] bg-white">
        <section id="logo" className="">
          <img src={logo} alt="logo" className="w-[10vw]" />
        </section>
        <nav id="navigation" className="flex flex-col gap-2">
          <Link
            to="#"
            className="font-semibold hover:text-blue-800 transition-all"
          >
            Home
          </Link>
          <Link
            to="#"
            className="font-semibold hover:text-blue-800 transition-all"
          >
            Equipe
          </Link>
          <Link
            to="#"
            className="font-semibold hover:text-blue-800 transition-all"
          >
            Documentação
          </Link>
        </nav>
        <section id="midia" className="flex flex-col gap-2">
          <ul id="icons" className="flex w-max m-auto gap-4 ">
            <li>
              <img src="" alt="logo" />
            </li>
            <li>
              <img src="" alt="logo" />
            </li>
            <li>
              <img src="" alt="logo" />
            </li>
          </ul>
          <p>TechForce©2024 Todos os direitos reservados</p>
        </section>
      </footer>
    );
  };

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
