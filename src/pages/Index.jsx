import { ViteIcon } from "../components/ViteIcon.jsx";
import { ReactIcon } from "../components/ReactIcon.jsx";
import Greeting from "../components/Greeting.tsx";
import Counter from "../components/Counter.jsx";
import ObjectCounter from "../components/ObjectCounter.jsx";

const Index = () => {
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
};

export default Index;
