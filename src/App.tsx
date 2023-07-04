import { useEffect, useState } from "react";
import Container from "./components/Container";
import Cookies from "universal-cookie";
import Weather from "./components/Weather";
import ConfigButton from "./components/ConfigButton";
import ConfigModal from "./components/configModal";
import { WeatherProvider } from "./context/weather";
import AddMarkerModal from "./components/AddMarkerModal";
import MarkersContainer from "./components/MarkersContainer";
import AddLinkModal from "./components/AddLinkModal";
import LinksContainer from "./components/LinksContainer";
import AddNoteModal from "./components/AddNoteModal";
import NoteContainer from "./components/NotesContainer";
import NoteView from "./components/NoteView";

const cookies = new Cookies();
const themeColors = {
  sky: "from-sky-500 to-sky-700 h-screen w-full bg-gradient-to-r flex items-center justify-center",
  cyan: "from-cyan-500 to-cyan-700 h-screen w-full bg-gradient-to-r flex items-center justify-center",
  amber:
    "from-amber-700 to-amber-800 h-screen w-full bg-gradient-to-r flex items-center justify-center",
  emerald:
    "from-emerald-500 to-emerald-700 h-screen w-full bg-gradient-to-r flex items-center justify-center",
  indigo:
    "from-indigo-500 to-indigo-700 h-screen w-full bg-gradient-to-r flex items-center justify-center",
  pink: "from-pink-600 to-pink-700 h-screen w-full bg-gradient-to-r flex items-center justify-center",
};

function App() {
  const [color, setColor] = useState<ThemeColors>(
    cookies.get("color") || "sky"
  );
  const [showConfig, setShowConfig] = useState(false);
  const [content, setContent] = useState<Content>(
    JSON.parse(
      localStorage.getItem("content") || '{"markers":[],"links":[],"notes":[]}'
    )
  );

  const [addingMarker, setAddingMarker] = useState(false);
  const [addingLink, setAddingLink] = useState(false);
  const [addingNote, setAddingNote] = useState(false);
  const [showNote, setShowNote] = useState<Note | null>(null);

  const elementIsMarker = (
    element: Marker | Link | Note
  ): element is Marker => {
    return (element as Marker).imgUrl !== undefined;
  };

  const elementIsLink = (element: Marker | Link | Note): element is Link => {
    return (element as Link).description !== undefined;
  };

  const handleAddElement = (element: Marker | Link | Note) => {
    const aux = { ...content };
    if (elementIsMarker(element)) aux.markers.push(element);
    else if (elementIsLink(element)) aux.links.push(element);
    else aux.notes.push(element);
    setContent(aux);
  };

  const removeElement = (element: Marker | Link | Note) => {
    const aux = { ...content };
    console.log(aux);
    console.log(element);
    if (elementIsMarker(element)) {
      const index = aux.markers.findIndex((elem) => elem.link === element.link);
      if (index < 0) return;
      aux.markers.splice(index, 1);
    } else if (elementIsLink(element)) {
      const index = aux.links.findIndex((elem) => elem.link === element.link);
      if (index < 0) return;
      aux.links.splice(index, 1);
    } else {
      const index = aux.notes.findIndex(
        (elem) => elem.content === element.content
      );
      if (index < 0) return;
      aux.notes.splice(index, 1);
    }
    setContent(aux);
  };

  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(content));
  }, [content]);

  useEffect(() => {
    cookies.set("color", color);
  }, [color]);

  return (
    <div className={themeColors[color]}>
      <WeatherProvider>
        {showConfig && (
          <div className="backdrop-blur-sm z-50 absolute top-0 left-0 h-full w-full flex justify-center items-center">
            <ConfigModal
              closeConfig={() => setShowConfig(false)}
              setColor={setColor}
            />
          </div>
        )}
        <div className="absolute top-0 right-0 pt-8 pr-8 flex gap-4 items-center h-12 text-white ">
          <Weather />
          <ConfigButton onClick={() => setShowConfig(true)} />
        </div>
      </WeatherProvider>
      <div className="h-12"></div>
      <div className="flex flex-col md:flex-row gap-8 w-11/12 lg:w-5/6 mt-24 md:mt-0">
        <div className="flex flex-col gap-8 grow-[3] flex-1 max-w-6xl">
          <Container
            title={"marcadores"}
            addMethod={() => setAddingMarker(true)}
            color={color}
          >
            <MarkersContainer content={content} removeMarker={removeElement} />
          </Container>
          <Container
            title={"notas"}
            addMethod={() => setAddingNote(true)}
            color={color}
          >
            <NoteContainer
              content={content}
              removeNote={removeElement}
              setNote={setShowNote}
            />
          </Container>
        </div>
        <div className="grow-[2] max-w-2xl">
          <Container
            title={"enlaces de interés "}
            addMethod={() => {
              setAddingLink(true);
            }}
            color={color}
          >
            <LinksContainer content={content} removeLink={removeElement} />
          </Container>
        </div>
      </div>
      {addingMarker && (
        <div className="backdrop-blur-sm  absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <AddMarkerModal
            addElementMethod={handleAddElement}
            closeModal={() => setAddingMarker(false)}
          />
        </div>
      )}
      {addingLink && (
        <div className="backdrop-blur-sm  absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <AddLinkModal
            addElementMethod={handleAddElement}
            closeModal={() => setAddingLink(false)}
          />
        </div>
      )}
      {addingNote && (
        <div className="backdrop-blur-sm  absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <AddNoteModal
            addElementMethod={handleAddElement}
            closeModal={() => setAddingNote(false)}
          />
        </div>
      )}
      {showNote && (
        <div className="backdrop-blur-sm  absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <NoteView closeModal={() => setShowNote(null)} note={showNote} />
        </div>
      )}
      <div className="h-24"></div>
    </div>
  );
}

export default App;
