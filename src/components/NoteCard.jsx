import { DeleteButton } from "./DeleteButton";

import PropTypes from "prop-types";

function NoteCard({ no, title, createdAt, children, id, index, onDelete }) {
  return (
    <div className="note-container fs-4 mb-3 p-2 bg-info text-light">
      <div className="note-header card-header d-flex justify-content-between align-items-center bg-info text-light p-2">
        <div>Catatan {no}</div>
        <DeleteButton index={index} id={id} onDelete={onDelete} />
      </div>
      <div className="note-card card p-2 bg-white">
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">{title}</h5>
          <div className="card-text fs-5">{createdAt}</div>
        </div>
        <p className="card-text fs-5 text-start">{children}</p>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  no: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { NoteCard };