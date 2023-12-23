import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import hapus from "../assets/hapus.png";

function DeleteButton({ index, id, onDelete }) {
  return (
    <Button
      variant="danger"
      className="btn-outline-link fs-6"
      onClick={() => onDelete(id)}
    >
      <img src={hapus} alt="Delete" width="25" height="25" />
    </Button>
  );
}

DeleteButton.protoTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { DeleteButton };