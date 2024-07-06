import React from "react";

const Note = ({ now, handleClick }) => {
  return (
    <div>
      <p>現在の時刻: {new Date(now).toLocaleString()}</p>
      <button onClick={handleClick}>カウントを増やす</button>
    </div>
  );
};

export default Note;
