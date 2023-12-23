import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { addNote } from "../utils/network";
import "../App.css";

function AddNote(props) {
  const navigate = useNavigate();
  const { username } = useParams();

  const [note, setNote] = useState({
    title: "",
    createdAt: new Date().toISOString().split('T')[0],
    body: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    addNote(note);
    console.log(note);
    navigate(`/${username}`);
  }

  return (
    <div className="p-2" style={{ height: '100vh', backgroundColor: '#318EAD' }}>
      <strong className="fs-1 text-center text-light">Form Add Note</strong>
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
            placeholder="Masukkan Title"
            required
          />
        </Form.Group>
        <Form.Group className="col-12 text-start">
          <Form.Label>Body</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setNote({ ...note, body: value });
            }}
            type="text"
            placeholder="Masukkan Body"
            as="textarea"
            rows={3}
            required
          />
        </Form.Group>
        {note.title && note.body ? (
          <Button
            className="col-2 btn-outline-light position-relative start-50 translate-middle-x"
            variant="info"
            type="submit"
          >
            Buat Catatan
          </Button>
        ) : (
          <Button
            className="col-2 btn-outline-light position-relative start-50 translate-middle-x"
            variant="info"
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