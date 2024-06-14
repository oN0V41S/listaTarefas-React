import "../login/login.css";

// Importando Funções e Componentes
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/loginForm";
import { InputField } from "../../components/loginForm";

import cadastro from "../../services/auth/cadastro";

// Importando Assets
import { FaUser, FaLock } from "react-icons/fa";

export default function Cadastro() {
  // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [email1, setEmail1] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  // Estado para armazenar os Textos de erro
  const [textoErro, setTextErro] = useState(null);

  // Estado para tratar o tempo da requisição
  const [isLoading, setIsLoading] = useState(false);

  // Para mudar de Pagina
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeEmail1 = (e) => {
    setEmail1(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePassword1 = (e) => {
    setPassword1(e.target.value);
  };

  const textosErro = {
    senhasDiferentes:
      "As senhas informadas não coincidem. Por favor, verifique e tente novamente.",
    campoVazio: "Por favor, preencha todos os campos antes de prosseguir.",
    emailJaExiste:
      "O e-mail inserido já está em uso. Por favor, tente com um e-mail diferente ou faça login se já possui uma conta.",
    emailDiferente:
      "Os emails informados não coincidem. Por favor, verifique e tente novamente.",
  };

  const onSubmit = () => {
    setIsLoading(true);

    setTextErro(false);
    if (password && email && username && password1) {
      if (password1 === password) {
        if (email === email1) {
          cadastro(username, email, password).then((retorno) => {
            setIsLoading(false);
            if (retorno.validacao === false) {
              setTextErro("emailJaExiste");
            } else {
              navigate("/validarEmail");
            }
          });
        } else {
          setIsLoading(false);
          setTextErro("emailDiferente");
        }
      } else {
        setIsLoading(false);
        setTextErro("senhasDiferentes");
      }
    } else {
      setIsLoading(false);
      setTextErro("campoVazio");
    }
  };

  return (
    <main className="login m-auto w-full mt-0 pt-10 pb-10 h-auto">
      <LoginForm
        formTitle="Faça Cadastro"
        formButton={isLoading ? "Carregando..." : "Cadastrar-se"}
        onSubmit={onSubmit}
        isLoading={isLoading}
      >
        <InputField
          type="text"
          placeholder="Nome"
          value={username}
          onChange={onChangeUsername}
        >
          <FaUser className="icon" />
        </InputField>
        <InputField
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={onChangeEmail}
        >
          <FaUser className="icon" />
        </InputField>
        <InputField
          type="text"
          placeholder="Confirme o email"
          value={email1}
          onChange={onChangeEmail1}
        >
          <FaUser className="icon" />
        </InputField>
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        >
          <FaLock className="icon" />
        </InputField>
        <InputField
          type="password"
          placeholder="Confirme a senha"
          value={password1}
          onChange={onChangePassword1}
        >
          <FaLock className="icon" />
        </InputField>
        <div className="signup-link flex text-white m-4 m-auto justify-between">
          {textoErro && <p className="textErro">{textosErro[textoErro]}</p>}
          <p>Já tem uma conta?</p>
          <Link to="/" className="link">
            Faça Login
          </Link>
        </div>
      </LoginForm>
    </main>
  );
}
