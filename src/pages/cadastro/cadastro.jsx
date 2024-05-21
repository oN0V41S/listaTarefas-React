import 'cadastro.css'

import {useState} from 'react';

import { LoginForm } from "../../components/loginForm";
import { InputField } from "../../components/loginForm";

import { FaUser, FaLock, FaPortrait } from "react-icons/fa";

export default function Cadastro(){
  // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="login m-auto w-full mt-0 pt-20 h-[100vh]">
      <LoginForm formTitle="Faça Login">
        <InputField type="text" placeholder="E-mail">
          <FaUser className="icon" />
        </InputField>
        <InputField type="password" placeholder="Password">
          <FaLock className="icon" />
        </InputField>
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registar</a>{" "}
          </p>
        </div>
      </LoginForm>
    </main>
}