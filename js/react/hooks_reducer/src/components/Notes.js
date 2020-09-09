import React, { useState, useEffect, useReducer } from "react";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return action.payload;
    case "ADD_NOTE":
      return [...state, action.note];
    case "DELETE_NOTE":
      return state.filter((note) => note.title !== action.title);
    default:
      return state;
  }
};

export const Notes = () => {
  const defaultNote = { title: "", body: "" };

  const [notes, dispatch] = useReducer(notesReducer, []);

  const [note, setNote] = useState(defaultNote);

  // If you pass an empty array the function will only fire
  // on load as per componentDidMount.
  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) dispatch({ type: "POPULATE_NOTES", payload: notesData });
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", note });
    setNote(defaultNote);
  };

  const deleteNote = (title) =>
    dispatch({
      type: "DELETE_NOTE",
      title,
    });

  const renderNotes = () =>
    notes.map(({ title, body }) => {
      return (
        <Note key={title} title={title} body={body} deleteNote={deleteNote} />
      );
    });

  return (
    <div>
      <h1>notes</h1>
      {renderNotes()}
      <p>add note</p>
      <form onSubmit={(e) => addNote(e)}>
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
    </div>
  );
};

Notes.defaultProps = {
  notes: [],
};

const Note = ({ title, body, deleteNote }) => {
  // If you pass a function as the third argument you
  // get a cleanup function as per componentDidUnmount.
  useEffect(() => {
    return () => console.log("cleanup!");
  }, []);
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => deleteNote(title)}></button>
    </div>
  );
};
