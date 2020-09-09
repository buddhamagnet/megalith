import React, { useEffect, useReducer } from "react";

import { notesContext } from "../context/notes";
import { notesReducer } from "../reducers/notes";
import { NoteList } from "./NoteList";
import { Form } from "./Form";

export const Notes = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  // If you pass an empty array the function will only fire
  // on load as per componentDidMount.
  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) dispatch({ type: "POPULATE_NOTES", payload: notesData });
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <notesContext.Provider value={{ notes, dispatch }}>
      <h1>notes</h1>
      <NoteList />
      <Form />
    </notesContext.Provider>
  );
};

Notes.defaultProps = {
  notes: [],
};
