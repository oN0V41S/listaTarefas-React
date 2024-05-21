import "./loginForm.css";

// Importando Funções e Componentes
import { useState } from "react";

export const LoginForm = ({children,formTitle}) => {
    // Estados para armazenar as entradas do usuário
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    // Impede que a página seja recarregada
    event.preventDefault();

    // Faz o console log das credenciais do usuário
    console.log("Dados de Login:", { username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="formLogin w-1/2 m-auto">
      <h1>{formTitle}</h1>
      {children}
    </form>
  );
};

export const InputField = ({type,placeholder,value,children}) => {
  return (
    <div className="input-field">
      <input
        type={type}
        placeholder={placeholder}
        required
        value={value}
      />
      {children}
    </div>
  );
};
