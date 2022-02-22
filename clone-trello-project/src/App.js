import React from "react";
import {authentication} from "./request/authentication";
import {getCard} from "./request/getCard";
import {createCard} from "./request/createCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>register</button>
          <button onClick={authentication}>auth</button>
          <button onClick={getCard}>get card</button>
          <button onClick={createCard}>create card</button>

      </header>
    </div>
  );
}

export default App;
