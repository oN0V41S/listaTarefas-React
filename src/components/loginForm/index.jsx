import "./style.css";
import ListaTarefas from "../../assets/listaTarefa.png";

export const LoginForm = ({ children, formTitle, formButton, onSubmit }) => {
  return (
    <form className="formLogin p-8 w-[2vw] md:w-[35vw] m-auto md:mt-0 mt-[2vh] bg-[rgba(0,0,0,0.4)]">
      <h1 className="flex items-center m-auto w-max mb-4">
        <img src={ListaTarefas} alt="Icon" className="w-[2vw] mr-2" />
        Lista de Tarefas
      </h1>
      <h1>{formTitle}</h1>
      {children}
      <button type="button" onClick={onSubmit}>
        {formButton}
      </button>
    </form>
  );
};

export const InputField = ({
  type,
  placeholder,
  value,
  children,
  onChange,
}) => {
  return (
    <div className="input-field">
      <input
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
      {children}
    </div>
  );
};
