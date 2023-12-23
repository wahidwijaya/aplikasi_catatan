import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();
    register({ username, password }).then((response) => {
      console.log(response);
      if (response) {
        console.log(response?.code);
        alert("Selamat Anda telah berhasil membuat akun!!");
        navigate("/");
      }
    });
  }

  return (
    <div className="p-4" style={{ height: '100vh', backgroundColor: '#318EAD' }}>
      <strong className="fs-1 text-center text-light">REGISTER</strong>
      <Form
        className="row px-5 g-3 m-5 text-light col-md-6 mx-auto bg-info p-4 rounded"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label className="text-light">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>
        <Form.Group>
          {username && password ? (
            <Button
              className="col-3 mb-3 btn-outline-primary"
              variant="light"
              type="submit"
            >
              Register
            </Button>
          ) : (
            <Button
              className="col-3 mb-3 btn-outline-light"
              variant="light"
              type="submit"
              disabled
            >
              Register
            </Button>
          )}
        </Form.Group>
      </Form>
    </div>
  );
}

export default Register;
