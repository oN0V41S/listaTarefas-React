import "./digitarEmail.css";
// Importando Funções e Componentes
import React, {useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { LoginForm } from "../../components/loginForm";
import { InputField } from "../../components/loginForm";

import reenviarCodigo from "../../services/reenviarCodigo";

export default function DigitarEmail() {
  // Estados para armazenar as entradas do usuário
  const [email, setEmail] = useState("");

  // Estado para tratar os error de login
  const [textoErros, setTextosErros] = useState(false);

  // Estado para tratar o tempo de requisição
  const [isLoading, setIsLoading] = useState(false);

  // Usando a biblioteca 'useNavigate'
  const navigate = useNavigate()

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  // Mensagens de erro
  const textosErro = {
    campoVazio: "Preencha todos os campos",
  }

  const onSubmit = () => {

    setIsLoading(true);

    if(email){

      reenviarCodigo(email)
      localStorage.setItem('email', email)
      navigate('/esqueciSenha');

    }else{
      setTextosErros('campoVazio')
      setIsLoading(false);
    }
  }

  return (
    <main className="login m-auto w-full mt-0 pt-20 h-[100vh]">
      <LoginForm formTitle="Enviar Código" formButton={isLoading ? "Carregando..." : "Enviar"} onSubmit={onSubmit} isLoading={isLoading}>
        <p className="texto-normal">Sera enviado um código de verificação para o email digitado</p>
        <InputField type="text" placeholder="email" value={email} onChange={onChangeEmail}>
        </InputField>
        <div className="signup-link">
          {textoErros &&(
            <p className="texto-erro">{textosErro[textoErros]}</p>
          )}
        </div>
      </LoginForm>
    </main>
  );
}
