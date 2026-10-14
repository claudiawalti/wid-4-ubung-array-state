import "./app.css";
import { useState } from "react";

function App() {
  const [todoListe,setTodoListe] = useState(["Schlafen", "Essen"])
  const [aktuellesTodo,setAktuellesTodo] = useState("");
  console.log(aktuellesTodo);

  const removeTodo = (index) => {
    const neueTodoliste = todoListe.filter((todo, i) => index !== i)
    setTodoListe(neueTodoliste);
  };


  return (
    <div id="app">
      <header>Übung WID 4 - Array State </header>
      <h2> Todo-Liste</h2>
      <div id="container">
        {/* ---- Hinzufügen von Todos ----  */}
        <div id="eingabeZeile">
        <input type="text"
          onChange={(event) => setAktuellesTodo(event.target.value)}
          />
          <button className="Button" onClick={() => setTodoListe([...todoListe,aktuellesTodo])}
            >
              Todo hinzufügen
              </button>
        </div>
        <hr />
        {/* ---- Anzeigen von Todos ----  */}
        <ol>
          {todoListe.map((todo,index) => (
            <div className="todoListe" key={index}>
            <li>{todo}</li>
            <button onClick={() => removeTodo(index)}>Todo löschen</button>
            </div>
          ))}
          {/*<li>
            <div className="todoListe">
              <p>Schlafen</p>
              <button>Todo löschen</button>
            </div>
          </li> */}
        </ol>
      </div>
    </div>
  );
}

export default App;
