import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getUserLogged } from "../utils/network";

function Profile() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [profil, setProfil] = useState({ data: {} });

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await getUserLogged();
      if (!result.error) {
        setProfil(result);
      } else {
        console.error(`Error fetching profile: ${result.code}`);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="p-4" style={{ height: '100vh', backgroundColor: '#318EAD' }}>
      <strong className="fs-1 text-center text-light">PROFILE</strong>
      <Form className="row px-5 g-3 m-5 text-light col-md-6 mx-auto bg-info p-4 rounded">
        <Form.Group className="mb-3">
          <Form.Label>User Id</Form.Label>
          <Form.Control type="text" value={profil.data.id} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={profil.data.username} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Join On</Form.Label>
          <Form.Control
            type="text"
            value={
              profil.data.createdAt ? profil.data.createdAt.slice(0, 10) : ""
            }
            disabled
          />
        </Form.Group>
        <Button
          className="col-2 btn-outline-primary position-relative start-50 translate-middle-x"
          variant="light"
          type="submit"
          onClick={() => {
            navigate(`/${username}`);
          }}
        >
          OK
        </Button>
      </Form>
    </div>
  );
}

export default Profile;
