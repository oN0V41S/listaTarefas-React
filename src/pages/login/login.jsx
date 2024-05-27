import "./login.css";
// Importando Funções e Componentes
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { LoginForm } from "../../components/loginForm";
import { InputField } from "../../components/loginForm";

import login from '../../services/login';

// Importando Assets
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubmit = () => {

    login('miguelpereiralomaas@gmail.com', 'miguel123')
  }

  login('miguelpereiralomaas@gmail.com', 'miguel123')

  return (
    <main className="login m-auto w-full mt-0 pt-20 h-[100vh]">
      <LoginForm formTitle="Login" formButton="Login" onSubmit={onSubmit}>
        <InputField type="text" placeholder="E-mail" value={username} onChange={onChangeUsername}>
          <FaUser className="icon" />
        </InputField>
        <InputField type="password" placeholder="Password" value={password} onChange={onChangePassword}>
          <FaLock className="icon" />
        </InputField>
        <div className="signup-link">
          <p>Não tem uma conta?</p>
          <Link to="/cadastro">Registar</Link>
        </div>
      </LoginForm>
    </main>
  );
}
