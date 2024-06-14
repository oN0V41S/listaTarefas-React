import "../login/login.css";
import './senha.css'

// Importando Funções e Componentes
import { React, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { LoginForm } from "../../components/loginForm";
import { InputField } from "../../components/loginForm";

// Importando Assets
import { FaLock } from "react-icons/fa";

import reenviarCodigo from "../../services/auth/reenviarCodigo";
import recSenha from '../../services/auth/recSenha';

export default function EsqueciSenha() {

  // Estados para armazenar as entradas do usuário
  const [cdVerificacao, setCdVerificacao] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  // Estado para armazenar os Textos de erro
  const [textoErro, setTextErro] = useState(null);

  // Estado para tratar o tempo da requisição
  const [isLoading, setIsLoading] = useState(false);

  const [enviarCodigo, setEnviarCodigo] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  let emailLocalSotorage = localStorage.getItem('email');

  // Para mudar de Pagina
  const navigate = useNavigate();

  const onChangeVerificacao = (e) => {
    setCdVerificacao(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePassword1 = (e) => {
    setPassword1(e.target.value);
  };

  const textosErro = {
    codigoErrado: "O código informado esta errado ",
    senhasDiferentes: "As senhas informadas não coincidem. Por favor, verifique e tente novamente.",
    campoVazio: "Por favor, preencha todos os campos antes de prosseguir.",
  };

  async function reenviarCodigoVerificacao(){
    reenviarCodigo(emailLocalSotorage)
    setEnviarCodigo(true)
    setTimeLeft(60)

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setEnviarCodigo(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  }

  const onSubmit = () => {
    setIsLoading(true);
    if(!cdVerificacao || !password || !password1){
      setIsLoading(false);
      return(setTextErro('campoVazio'));
    }
    if(password !== password1){
      setIsLoading(false);
      return(setTextErro('senhasDiferentes'));
    }
    recSenha(emailLocalSotorage, password, cdVerificacao).then(resposta => {
      if(resposta.status === false){
        setIsLoading(false);
        return(setTextErro('codigoErrado'));
      }else{
        setIsLoading(false)
        navigate('/')
      }
    })
  };

  return (
    <main className="login m-auto w-full mt-0 pt-10 pb-10 h-auto">
      <LoginForm formTitle="Recuperar Senha" formButton={isLoading ? "Carregando..." : "Redefinir"} onSubmit={onSubmit} isLoading={isLoading}>
        <p className='texto-normal'>O código foi enviado para o email: <strong>{emailLocalSotorage}</strong> {<Link to="/digitarEmail" className='link2'>Mudar email</Link>}</p>
      <InputField type="number" placeholder="Código de verificação" value={cdVerificacao} onChange={onChangeVerificacao}>
        </InputField>
        <InputField type="password" placeholder="senha" value={password} onChange={onChangePassword}>
          <FaLock className="icon" />
        </InputField>
        <InputField type="password" placeholder="Confirme a senha" value={password1} onChange={onChangePassword1}>
          <FaLock className="icon" />
        </InputField>
        <div className="signup-link flex text-white m-4 m-auto justify-between">
          {textoErro && (
            <p className="textErro">{textosErro[textoErro]}</p>
          )}
          <p>Já tem uma conta?</p>
          <Link to="/" className='link'>Faça Login</Link>
          {enviarCodigo ? (
            <p className="texto-normal">Por favor, aguarde {timeLeft} segundos para reenviar  .</p>
          ) : (
            <button type='button' onClick={reenviarCodigoVerificacao} className="link">Reenviar código de vereficação</button>
          )}
        </div>
      </LoginForm>
    </main>
  );
}