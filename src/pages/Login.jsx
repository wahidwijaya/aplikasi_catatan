import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { login, putAccessToken } from "../utils/network";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmitHandler(event) {
    event.preventDefault();
    const response = await login({ username, password });
    if (response?.data?.token) {
      putAccessToken(response.data.token);
      navigate(`/${username}`);
    }
  }

  return (
    <div className="p-4" style={{ height: '100vh', backgroundColor: '#318EAD' }}>
      <strong className="fs-1 text-center text-white">LOGIN</strong>
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
            type="password"
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
              Login
            </Button>
          ) : (
            <Button
              className="col-3 mb-3 btn-outline-light"
              variant="light"
              type="submit"
              disabled
            >
              Login
            </Button>
          )}
        </Form.Group>
        <div className="line" />
        <Form>
          <div className="text-center">
          Jika belum memiliki akun, silahkan melakukan{" "}
            <Link to="/register" className="text" style={{ color: '#225A76' }}>
              <strong>register!!</strong>
            </Link>
          </div>
        </Form>
      </Form>
    </div>
  );
}

export default Login;
