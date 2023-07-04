import { motion } from "framer-motion";
import { useState } from "react";
import xIcon from "../assets/x.svg";

export default function AddLinkModal({
  addElementMethod,
  closeModal,
}: {
  addElementMethod: (element: Marker | Link | Note) => void;
  closeModal: () => void;
}) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [alert, setAlert] = useState("");

  const showAlertBy3Seconds = (info: string) => {
    setAlert(info);
    setTimeout(() => setAlert(""), 3000);
  };

  const handleConfirm = () => {
    if (title === "") {
      showAlertBy3Seconds("El título no puede estar vacío");
      return;
    }
    if (link === "") {
      showAlertBy3Seconds("El enlace no puede estar vacío");
      return;
    }
    let linkToUse = link;
    if (!link.startsWith("http://") || !link.startsWith("https://")) {
      linkToUse = "http://" + link;
    }
    const newElement = {
      title,
      link: linkToUse,
      description,
    };
    addElementMethod(newElement);
    closeModal();
  };

  return (
    <motion.div
      className="absolute bg-zinc-900 p-10 flex flex-col border-2 border-zinc-950 rounded-lg text-zinc-100"
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
    >
      <button
        className="absolute top-2 right-2 hover:scale-110 ease-linear"
        onClick={closeModal}
      >
        <img src={xIcon} alt="" />
      </button>
      <span className="font-bold uppercase">Agregar marcador</span>
      <label htmlFor="" className="mt-4">
        Título:
      </label>
      <input
        type="text"
        name=""
        id=""
        className="bg-zinc-800 p-2 text-center text-white focus:outline-none rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="" className="mt-4">
        Enlace:
      </label>
      <input
        type="text"
        name=""
        id=""
        className="bg-zinc-800 p-2 text-center text-white focus:outline-none rounded-md"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <label htmlFor="" className="mt-4">
        Descripción:
      </label>
      <textarea
        name=""
        id=""
        cols={3}
        rows={6}
        className="bg-zinc-800 p-2 text-center text-white focus:outline-none rounded-md resize-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="h-6 my-4 w-72 text-center">
        {alert !== "" && (
          <span className="uppercase text-white bg-red-600 p-2">{alert}</span>
        )}
      </div>
      <button
        className="bg-zinc-600 text-zinc-100 font-bold p-2 rounded-md hover:bg-zinc-500"
        onClick={handleConfirm}
      >
        Confirmar
      </button>
    </motion.div>
  );
}
