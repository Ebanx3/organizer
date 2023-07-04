import xIcon from "../assets/x.svg";

export default function Note({
  note,
  removeNote,
  setNote,
}: {
  note: Note;
  removeNote: (Element: Note) => void;
  setNote: (note: Note) => void;
}) {
  return (
    <div className="group relative">
      <button
        className="my-4 mx-2 items-center h-32 w-32 bg-orange-200 p-2"
        onClick={() => setNote(note)}
      >
        <span className="text-black text-xs">
          {note.content.substring(0, 40)}
          {note.content.length > 40 ? "..." : ""}
        </span>
      </button>
      <button
        onClick={() => removeNote(note)}
        className="group-hover:visible transition-all ease-linear invisible absolute -top-3 -right-0 bg-red-600 rounded-full h-5 w-5 cursor-pointer hover:bg-red-400"
      >
        <img src={xIcon} alt="" />
      </button>
    </div>
  );
}
