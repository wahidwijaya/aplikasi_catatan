import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NoteList from "../components/NoteList";
import { deleteNotes, getNotes } from "../utils/local";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onDeleteHandler = (index) => {
    deleteNotes(index);
    setNotes(getNotes());
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    const data = getNotes();
    setNotes(data);
  }, []);

  return (
    <div className="p-3">
      <strong className="fs-1 text-dark">Catatan App Baca Buku</strong>
      <br />
      <input
        className="search-bar mb-2 col-8 px-2"
        type="text"
        onChange={(event) => {
          handleChangeSearch(event);
        }}
        value={search}
        placeholder="Cari Berdasarkan Judul......"
        style={{ height: '50px', fontSize: '16px' }}
      />
      <Button
        className="col-3 mb-2 btn-outline-primary text-center"
        variant="light"
        type="submit"
        onClick={() => {
          navigate("/add");
        }}
        style={{ height: '55px', width: "110px",fontSize: '16px' }}
      >
        Add Notes
      </Button>
      <div>
        <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
      </div>
    </div>
  );
}

export default Home;