import { NoteCard } from "./NoteCard";

function NoteList(props) {
  const { notes, onDelete } = props;
  return (
    <div>
      {notes.map((note, index) => {
        return (
          <NoteCard
            key={note.id}
            no={index + 1}
            index={index}
            id={note.id}
            title={note.title}
            createdAt={note.createdAt}
            onDelete={onDelete}
          >
            {note.body}
          </NoteCard>
        );
      })}
    </div>
  );
}

export default NoteList;