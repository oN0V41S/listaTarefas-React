import './cadastro.css'

// Importando Funções e Componentes
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { LoginForm } from "../../components/loginForm";
import { InputField } from "../../components/loginForm";

// Importando Assets
import { FaUser, FaLock } from "react-icons/fa";

export default function Cadastro(){
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
    window.alert(`Usuário: ${username} \n Senha: ${password}`)
  }

  return (
    <main className="login m-auto w-full mt-0 pt-20 h-[100vh]">
      <LoginForm formTitle="Faça Cadastro" formButton="Cadastrar-se" onSubmit={onSubmit}>
        <InputField type="text" placeholder="Nome" value={username} onChange={onChangeUsername}>
          <FaUser className="icon" />
        </InputField>
        <InputField type="text" placeholder="E-mail" value={username} onChange={onChangeUsername}>
          <FaUser className="icon" />
        </InputField>
        <InputField type="password" placeholder="Password" value={password} onChange={onChangePassword}>
          <FaLock className="icon" />
        </InputField>
        <div className="signup-link flex text-white m-4 m-auto justify-between">
          <p>Já tem tem uma conta?</p>
          <Link to="/">Faça Login</Link>
        </div>
      </LoginForm>
    </main>
  )
}