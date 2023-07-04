import { useState } from "react";
import xIcon from "../assets/x.svg";
import useWeather from "../hooks/useWeather";
import { motion } from "framer-motion";

export default function ConfigModal({
  closeConfig,
  setColor,
}: {
  closeConfig: () => void;
  setColor: (color: ThemeColors) => void;
}) {
  const { city, setCity } = useWeather();
  const [newCity, setNewCity] = useState("");

  const handleConfirm = () => {
    if (newCity !== "") {
      const str = newCity.charAt(0).toUpperCase() + newCity.slice(1);
      setCity(str);
    }
    closeConfig();
  };

  return (
    <motion.div
      className="absolute bg-zinc-900 p-10 flex flex-col border-2 border-zinc-950 rounded-lg"
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
    >
      <button
        className="absolute top-2 right-2 hover:scale-110 ease-linear"
        onClick={closeConfig}
      >
        <img src={xIcon} alt="" />
      </button>
      <span className="text-zinc-100 text-lg font-bold mb-2">Colores:</span>
      <div>
        <button
          className="h-6 w-8 rounded-md bg-gradient-to-r from-sky-500 to-sky-700 border-2 mr-2 hover:scale-125"
          onClick={() => setColor("sky")}
        ></button>
        <button
          className="h-6 w-8 rounded-md bg-gradient-to-r from-cyan-500 to-cyan-700 border-2 mx-2 hover:scale-125"
          onClick={() => setColor("cyan")}
        ></button>
        <button
          className="h-6 w-8 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-700 border-2 mx-2 hover:scale-125"
          onClick={() => setColor("indigo")}
        ></button>
        <button
          className="h-6 w-8 rounded-md bg-gradient-to-r from-amber-700 to-amber-800 border-2 mx-2 hover:scale-125"
          onClick={() => setColor("amber")}
        ></button>
        <button
          className="h-6 w-8 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-700 border-2 ml-2 hover:scale-125"
          onClick={() => setColor("emerald")}
        ></button>
        <button
          className="h-6 w-8 rounded-md bg-gradient-to-r from-pink-600 to-pink-700 border-2 ml-2 hover:scale-125"
          onClick={() => setColor("pink")}
        ></button>
      </div>
      <span className="text-zinc-100 text-lg font-bold mt-6 mb-2">Ciudad:</span>
      <input
        type="text"
        className="bg-zinc-800 p-2 text-center text-white focus:outline-none rounded-md"
        placeholder={city}
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
      />
      <button
        className="bg-zinc-600 text-zinc-100 font-bold mt-8 p-2 rounded-md hover:bg-zinc-500"
        onClick={handleConfirm}
      >
        Confirmar
      </button>
    </motion.div>
  );
}
