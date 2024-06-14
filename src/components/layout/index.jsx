import logo from "../../assets/logoSquad.png";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

import logoYoutube from "../../assets/logo-youtube.png";
import logoGithub from "../../assets/logo-github.png";
import logoInsta from "../../assets/logo-insta.png";

export default function Layout({ children }) {
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("idUsuario");
    console.log("Saindo da conta...");
  };

  const Header = () => {
    return (
      <header className="flex items-center justify-between w-[100%] pr-[15vw] pl-[15vw] p-5 bg-white">
        <img src={logo} alt="logo" className="m-0 mt-auto mb-auto w-[8vw]" />
        <h1 className="font-4 font-bold">Lista de Tarefas</h1>
        <button id="usuario" className="flex items-center gap-1">
          <Link to="/" onClick={onLogout} className="flex gap-2 items-center">
            Sair
            <FiChevronDown />
          </Link>
        </button>
      </header>
    );
  };

  const Footer = () => {
    return (
      <footer className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full m-auto justify-between pr-[5vw] pl-[5vw] pb-[8vh] pt-[5vh] bg-white">
        <section id="logo" className="flex items-center">
          <img src={logo} alt="logo" className="w-[10vw]" />
        </section>
        <section id="devs" className="flex flex-col gap-2">
          <h1 className="font-bold">Desenvolvedores</h1>
          <a
            href="https://github.com/oN0V41S"
            className="flex gap-2 items-center"
          >
            <img
              src={logoGithub}
              alt="Github Rafael Novais"
              className="w-[2vw]"
            />
            <h1>Rafael Novais</h1>
          </a>
          <a
            href="https://github.com/JoaoCamposDev"
            className="flex gap-2 items-center"
          >
            <img
              src={logoGithub}
              alt="Github João Campos"
              className="w-[2vw]"
            />
            <h1>João Campos</h1>
          </a>
          <a
            href="https://github.com/Miguel1DM"
            className="flex gap-2 items-center"
          >
            <img
              src={logoGithub}
              alt="Github Miguel Pereira"
              className="w-[2vw]"
            />
            <h1>Miguel Pereira</h1>
          </a>
          <a
            href="https://github.com/Vinecastro"
            className="flex gap-2 items-center"
          >
            <img
              src={logoGithub}
              alt="Github Vinicius Castro"
              className="w-[2vw]"
            />
            <h1>Vinicius Castro</h1>
          </a>
        </section>
        <section id="midia" className="flex flex-col gap-2">
          <ul id="icons" className="flex w-max m-auto gap-4 ">
            <li>
              <a href="https://www.instagram.com/itechforce_ofc/?igshid=YzVkODRmOTdmMw%3D%3D">
                <img src={logoInsta} alt="logo-instagram" className="w-[2vw]" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCA4CY4WQ5ir7SB6wVnpf8YQ">
                <img src={logoYoutube} alt="logo-Youtube" className="w-[2vw]" />
              </a>
            </li>
            <li>
              <a href="https://github.com/oN0V41S/tasklist-institutional">
                <img src={logoGithub} alt="logo-github" className="w-[2vw]" />
              </a>
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
