import xIcon from "../assets/x.svg";

export default function Marker({
  marker,
  removeMarker,
}: {
  marker: Marker;
  removeMarker: (element: Marker) => void;
}) {
  return (
    <div className="group relative transition-all ease-linear ">
      <a
        href={marker.link}
        target="__blank"
        className=" m-2 h-16 w-16 flex-col flex relative hover:scale-110 text-sm "
      >
        {marker.imgUrl != "" ? (
          <img src={marker.imgUrl} />
        ) : (
          <div className="h-full w-full rounded-lg p-1 bg-slate-300 flex justify-center items-center text-slate-950 font-bold">
            {marker.title}
          </div>
        )}
      </a>
      <div className="absolute bg-red-600 rounded-full h-4 w-4 -top-4 right-0 hover:bg-red-400 invisible group-hover:visible transition-all duration-200 ease-linear  cursor-pointer">
        <button onClick={() => removeMarker(marker)}>
          <img src={xIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
