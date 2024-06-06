import "./valEmail.css";
// Importando Funções e Componentes
import React, {useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { LoginForm } from "../../components/loginForm";
import { InputField } from "../../components/loginForm";

// Importando as rotas da Api
import validarEmail from '../../services/email';
import reenviarCodigo from "../../services/reenviarCodigo";

export default function ValidarEmail() {
  // Estados para armazenar as entradas do usuário
  const [cdVerificacao, setCdVerificacao] = useState("");

  // Estado para tratar os error de login
  const [textoErros, setTextosErros] = useState(false);

  // Estado para tratar o tempo de requisição
  const [isLoading, setIsLoading] = useState(false);

  // Pegando email do localStorage
  let emailLocalSotorage = localStorage.getItem('email');

  // Usando a biblioteca 'useNavigate'
  const navigate = useNavigate()

  const onChangeCdVerificacao = (e) => {
    setCdVerificacao(e.target.value)
  }

  // Mensagens de erro
  const textosErro = {
    campoVazio: "Preencha todos os campos",
    codigoErrado: "O código esta errado"
  }
  async function reenviarCodigoVerificacao(){
    reenviarCodigo(emailLocalSotorage)
  }
  const onSubmit = () => {

    setIsLoading(true);

    if(cdVerificacao){

      validarEmail(emailLocalSotorage, cdVerificacao).then(retorno => {

        if(retorno.validacao === true ){

          navigate('/')
        }else{
          setTextosErros('codigoErrado')
        }
        setIsLoading(false);
      });
    }else{
      setTextosErros('campoVazio')
    }
  }

  return (
    <main className="login m-auto w-full mt-0 pt-20 h-[100vh]">
      <LoginForm formTitle="Validar Email" formButton={isLoading ? "Carregando..." : "Validar"} onSubmit={onSubmit} isLoading={isLoading}>
        <p className="texto-normal">Um código de vereficação foi enviado para o email: {emailLocalSotorage}</p>
        <InputField type="text" placeholder="código de Verificação" value={cdVerificacao} onChange={onChangeCdVerificacao}>
        </InputField>
        <div className="signup-link">
          {textoErros &&(
            <p className="texto-erro">{textosErro[textoErros]}</p>
          )}
          <p className="texto-normal">Ja possui Conta?</p>
          <Link className="texto-normal" to="/">Login</Link>
          <a onClick={reenviarCodigoVerificacao} className="link"> Não recebi o código de verificação</a>
        </div>
      </LoginForm>
    </main>
  );
}
