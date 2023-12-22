import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addNotes } from "../utils/local";
import "../App.css";

function AddNote(props) {
  const navigate = useNavigate();

  const [note, setNote] = useState({
    title: "",
    createdAt: new Date().toISOString().split('T')[0],
    description: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    addNotes(note);
    navigate("/");
  }

  return (
    <div className="p-2 filter">
      <strong className="fs-1 text-center text-dark">Form Add Note</strong>
      <Form
        className="row g-3 m-5 text-light"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <Form.Group className="col-md-12 text-start">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setNote({ ...note, title: value });
            }}
            type="text"
            placeholder="Add Title"
            required
          />
        </Form.Group>
        <Form.Group className="col-12 text-start">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setNote({ ...note, description: value });
            }}
            type="text"
            placeholder="Add Description"
            as="textarea"
            rows={3}
            required
          />
        </Form.Group>
        {note.title && note.description ? (
          <Button
            className="col-2 btn-outline-primary position-relative start-50 translate-middle-x"
            variant="light"
            type="submit"
          >
            Buat Catatan
          </Button>
        ) : (
          <Button
            className="col-2 btn-outline-primary position-relative start-50 translate-middle-x"
            variant="light"
            type="submit"
            disabled
          >
            Buat Catatan
          </Button>
        )}
      </Form>
    </div>
  );
}

export default AddNote;