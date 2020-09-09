import React, { Fragment, useState, useContext } from "react";
import { notesContext } from "../context/notes";

export const Form = () => {
  const { dispatch } = useContext(notesContext);
  const defaultNote = { title: "", body: "" };

  const [note, setNote] = useState(defaultNote);

  return (
    <Fragment>
      <p>add note</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_NOTE", note });
          setNote(defaultNote);
        }}
      >
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <input
          type="text"
          name="body"
          value={note.body}
          onChange={(e) => setNote({ ...note, body: e.target.value })}
        />
        <button>add note</button>
      </form>
    </Fragment>
  );
};
