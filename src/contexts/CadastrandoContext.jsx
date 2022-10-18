import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
export const CadastrandoContext = createContext({});

export function CadastrandoProvider({ children }) {
  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso")
        obtendo(response.data);
      })
      .catch(() => {
        toast.error("Ops, algo deu errado!")
      });
  };
  function obtendo (response) {
    navigate("/login");
  };

  return (
    <CadastrandoContext.Provider value={{ onSubmitFunction, obtendo }}>
      {children}
    </CadastrandoContext.Provider>
  );
}