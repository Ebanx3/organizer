import { motion } from "framer-motion";
import xIcon from "../assets/x copy.svg";
import { useState } from "react";

export default function AddNoteModal({
  addElementMethod,
  closeModal,
}: {
  addElementMethod: (element: Marker | Link | Note) => void;
  closeModal: () => void;
}) {
  const [content, setContent] = useState("");
  const [alert, setAlert] = useState("");

  const showAlertBy2Seconds = (info: string) => {
    setAlert(info);
    setTimeout(() => setAlert(""), 2000);
  };

  const handleConfirm = () => {
    if (content === "") {
      showAlertBy2Seconds("La nota no puede estar vacía");
      return;
    }
    const newElement = {
      content,
      date: "30-mayo",
    };
    addElementMethod(newElement);
    closeModal();
  };

  return (
    <motion.div
      className="absolute  flex flex-col bg-orange-200 text-black"
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
    >
      <button
        className="absolute top-2 right-2 hover:scale-110 ease-linear z-50"
        onClick={closeModal}
      >
        <img src={xIcon} alt="" />
      </button>

      <textarea
        className="bg-transparent focus:outline-none w-96 h-96 text-center text-xl p-12 font-bold resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      ></textarea>
      {alert !== "" && (
        <span className="uppercase text-white font-bold bg-red-600 p-2 absolute -bottom-12">
          {alert}
        </span>
      )}
      <button
        className="bg-orange-600 hover:bg-orange-500 text-zinc-100 font-bold py-2 px-4 rounded-md hover:bg-zinc-500| absolute -bottom-4 right-4 "
        onClick={handleConfirm}
      >
        Confirmar
      </button>
    </motion.div>
  );
}
