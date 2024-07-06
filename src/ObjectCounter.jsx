import { useState } from "react";

function ObjectCounter() {
  const [object, setObject] = useState(0);
  return (
    <div className="card">
      <button
        onClick={() => setObject((object) => object + 1)}
        className="btn btn-secondary"
      >
        count is {object}
      </button>
      <p>Message {object}</p>
    </div>
  );
}

export default ObjectCounter;
