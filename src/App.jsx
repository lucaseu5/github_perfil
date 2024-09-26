import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
  // const [formularioVisible, setFormularioVisible] = useState;
  const [nomeUsuario, setNomeUsuario] = useState('');
  (true);

  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}
    
    {/* {formularioVisible && (
      <Formulario />
    )}

    <button onClick={() => setFormularioVisible(!formularioVisible)} type="button">toggle form</button> */}
    </>
  )
}

export default App
