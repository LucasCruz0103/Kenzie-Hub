

import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {api} from "../Services/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TecContext } from "./TecContext";
import {toast} from "react-toastify"
export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const {  setUser } = useContext(TecContext);
  const navigate = useNavigate();
  const [time, setTime] = useState(true);
  const [technology, setTechnology] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    async function upUser() {
      const token = localStorage.getItem("@KenzieHub:User");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          console.log("useeffect", data);
          setUser(data);
        } catch (err) {
          console.log(err);
        }
      }
      setTime(false);
    }
    upUser();
  }, [setUser]);

  function filtered (selecionando) {
    const index = technology.indexOf(selecionando);
    const arr = technology.filter((elem, cont) => {
      return cont !== index;
    });

    setTechnology(arr);
  };

  function cadastre ()  {
    navigate("/cadastro");
  };

  function validar(data) {
    navigate("/dashboard");
    setUser(data.user);
  };

  function erro (err) {
    console.log(err)
  };

  function checkAdd () {
    setAdd(!add);
  };

  function clearLocalStorange()  {
    window.localStorage.clear();
  };

  function onSubmitFunction(data) {

    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        validar(response.data);
        toast.success("Login realizado com sucesso")

        const { token } = response.data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        localStorage.setItem("@kenzieHub:token", token);
      })
      .catch((err) => {
        erro(err);
        toast.error("login falhou")
      });
  };

  return (
    <AuthContext.Provider
      value={{
        // user,
        onSubmitFunction,
        time,
        cadastre,
        setTechnology,
        technology,
        setAdd,
        add,
        checkAdd,
        filtered,
        clearLocalStorange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}