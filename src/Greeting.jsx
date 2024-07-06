import React from "react";

const Greeting = ({ names, children }) => {
  return (
    <>
      {names.map((name) => (
        <p key={name}>こんにちは{name}</p>
      ))}
      {children}
    </>
  );
};

export default Greeting;
