import React from "react";

export const Note = ({ title, body, deleteNote }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => deleteNote(title)}></button>
    </div>
  );
};
