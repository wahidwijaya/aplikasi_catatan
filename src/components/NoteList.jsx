import { NoteRow } from "./NoteRow";

function NoteList(props) {
  const { notes, onDelete } = props;
  return (
    <div>
      {notes.map((note, index) => {
        return (
          <NoteRow
            key={note.id}
            no={index + 1}
            index={index}
            id={note.id}
            title={note.title}
            createdAt={note.createdAt}
            onDelete={onDelete}
          >
            {note.description}
          </NoteRow>
        );
      })}
    </div>
  );
}

export default NoteList;