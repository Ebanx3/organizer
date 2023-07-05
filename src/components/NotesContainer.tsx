import Note from "./Note";

export default function NoteContainer({
  content,
  removeNote,
  setNote,
}: {
  content: Content;
  removeNote: (element: Note) => void;
  setNote: (note: Note) => void;
}) {
  return (
    <div className="w-full max-h-80vh min-h-40vh flex flex-wrap">
      {content.notes.map((note) => (
        <Note
          key={note.content}
          note={note}
          removeNote={removeNote}
          setNote={setNote}
        />
      ))}
    </div>
  );
}
