import React from "react";
import { PropsWithChildren } from "react";

type Props = {
  names: string[];
};

const Greeting = ({ names, children }: PropsWithChildren<Props>) => {
  return (
    <>
      {names.map((name) => (
        <p key={name}>こんにちは {name}</p>
      ))}
      {children}
    </>
  );
};

export default Greeting;
