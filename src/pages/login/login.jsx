import "./login.css";
// Importando Funções e Componentes
import React, {useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { LoginForm } from "../../components/loginForm";
import { InputField } from "../../components/loginForm";

import login from '../../services/auth/login';

// Importando Assets
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Estado para tratar os error de login
  const [loginFalse, setLoginFalse] = useState(false);

  // Estado para tratar o tempo de requisição
  const [isLoading, setIsLoading] = useState(false);

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const navigate = useNavigate();

  // Mensagens de erro
  const textosErro = {
    loginErrado: "E-mail ou senha incorretos. Por favor, tente novamente.",
    campoVazio: "Preencha todos os campos",
    emailNaoVerificado: "Por favor, verifique seu e-mail para concluir o processo de registro, e assim poder realizar o login."
  }

  const onSubmit = () => {

    setIsLoading(true);

    login(username, password).then(retorno => {

      if(username && password){
        if(retorno.statusLogin === false){
          setLoginFalse('loginErrado')
        }else if (retorno.statusLogin === 'emailNaoVerificado'){
          setLoginFalse('emailNaoVerificado')
          navigate('/validarEmail')
        }else{
          navigate('/tarefas')
          setLoginFalse(false)
        }
      }else{
        setLoginFalse('campoVazio')
      }
      setIsLoading(false);
    });
  }

  return (
    <main className="login m-auto w-full mt-0 pt-20 h-[100vh]">
      <LoginForm formTitle="Login" formButton={isLoading ? "Carregando..." : "Login"} onSubmit={onSubmit} isLoading={isLoading}>
        <InputField type="text" placeholder="E-mail" value={username} onChange={onChangeUsername}>
          <FaUser className="icon" />
        </InputField>
        <InputField type="password" placeholder="Password" value={password} onChange={onChangePassword}>
          <FaLock className="icon" />
        </InputField>
        <div className="signup-link">
          {loginFalse &&(
            <p className="texto-erro">{textosErro[loginFalse]}</p>
          )}
          <p className="texto-normal">Ainda não possui uma conta?</p>
          <Link className="link" to="/cadastro">Registrar-se</Link>
          <Link className="link" to="/digitarEmail">esqueceu senha</Link>
        </div>
      </LoginForm>
    </main>
  );
}
