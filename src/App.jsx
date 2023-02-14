import React from "react";
import "./App.css";

import Button from "./components/button/Button.component";

function App() {
  //simpre debe retornar un nodo de react. puede ser un fragment <> agrupa sin dar un padre
  return (
    <div className="App">
      <h1>Hola</h1>
      <Button>Boton primario</Button>
      <Button type="primary">Boton primario 2</Button>
      <Button type="secondary">Boton secundario</Button>
      <Button type="secondary" isHovereable>
        Boton hovereable
      </Button>
    </div>
  );
}

export default App;
