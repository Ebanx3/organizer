import { motion } from "framer-motion";
import xIcon from "../assets/x copy.svg";
export default function NoteView({
  closeModal,
  note,
}: {
  closeModal: () => void;
  note: Note;
}) {
  return (
    <motion.div
      className="absolute  flex flex-col bg-orange-200 h-96 w-96 text-xl font-bold p-12 text-center text-black"
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
    >
      <button
        className="absolute top-2 right-2 hover:scale-110 ease-linear z-50"
        onClick={closeModal}
      >
        <img src={xIcon} alt="" />
      </button>{" "}
      {note.content}
    </motion.div>
  );
}
