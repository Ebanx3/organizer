import xIcon from "../assets/x.svg";

export default function Link({
  link,
  removeLink,
}: {
  link: Link;
  removeLink: (Element: Link) => void;
}) {
  return (
    <div className="flex group items-center">
      <button
        onClick={() => removeLink(link)}
        className="group-hover:visible invisible bg-red-600 rounded-full h-4 w-4 cursor-pointer mr-2 hover:bg-red-400"
      >
        <img src={xIcon} alt="" />
      </button>
      <a
        href={link.link}
        className="relative group text-stone-200 font-bold text-lg hover:underline hover:text-white"
        target="__blank"
      >
        {link.title}
        {link.description != "" && (
          <span className="absolute invisible group-hover:visible bg-slate-300 p-4 w-64 text-slate-900  top-6 text-md rounded-md">
            {link.description}
          </span>
        )}
      </a>
    </div>
  );
}
