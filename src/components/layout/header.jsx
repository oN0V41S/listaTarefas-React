import "./header.css";
import { FaDoorClosed } from "react-icons/fa";

// Importando Componentes e Funções
import Select from "react-select";

// Importando Assets
import logosquad from "../../assets/logoSquad.png";

export default function Header() {
  const options = [
    { value: "opcao1", label: "Opção 1" },
  ];

  return (
    <header>
      <img src={logosquad} alt="logo da squad" id="logo" />

      <div id="textos">
        <div id="institutos">
          <a href="">
            <label>INSTITUTO</label>
          </a>
          <Select options={options} />
          {/* <select id="instituto">
                <option value="">Selecione uma responsa</option>
                <option value="senai">Senai</option>
                <option value="lojinha">Lojinha</option>
        </select> */}
        </div>

        <div id="usuario">
          <a href="">
            <h1>NOME DO BICO</h1>
          </a>
        </div>
        <a href="">
        <button>SAIR <FaDoorClosed className="icon" /></button> 
        </a>
      </div>

    </header>
  );
}
