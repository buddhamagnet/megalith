import React, { useContext } from "react";
import { notesContext } from "../context/notes";
import { Note } from "./Note";

export const NoteList = () => {
  const { notes, dispatch } = useContext(notesContext);
  return notes.map(({ title, body }) => {
    return (
      <Note
        key={title}
        title={title}
        body={body}
        deleteNote={() =>
          dispatch({
            type: "DELETE_NOTE",
            title,
          })
        }
      />
    );
  });
};
