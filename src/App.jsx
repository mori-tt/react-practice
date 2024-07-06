import { useState } from "react";
import "./App.css";
import { ViteIcon } from "./ViteIcon.jsx";
import { ReactIcon } from "./ReactIcon.jsx";
import Greeting from "./Greeting.jsx";
import Counter from "./Counter.jsx";
import ObjectCounter from "./ObjectCounter.jsx";

function App() {
  return (
    <>
      <div>
        <ViteIcon />
        <ReactIcon />
      </div>
      <h1>Vite + React</h1>
      <Greeting names={["React", "Vite"]} />
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ObjectCounter />
    </>
  );
}

export default App;
