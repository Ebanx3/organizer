import AddButton from "./AddButton";

const themeColors = {
  sky: "p-4 rounded-lg flex flex-col flex-1 bg-sky-950 text-sky-200 h-full",
  cyan: "p-4 rounded-lg flex flex-col flex-1 bg-cyan-950 text-cyan-200  h-full",
  indigo:
    "p-4 rounded-lg flex flex-col flex-1 bg-indigo-950 text-indigo-200 h-full",
  amber:
    "p-4 rounded-lg flex flex-col flex-1 bg-amber-950 text-amber-200 h-full",
  pink: "p-4 rounded-lg flex flex-col flex-1 bg-pink-950 text-pink-200 h-full",
  emerald:
    "p-4 rounded-lg flex flex-col flex-1 bg-emerald-950 text-emerald-200 h-full",
};

export default function Container({
  title,
  color,
  addMethod,
  children,
}: {
  title: string;
  addMethod: () => void;
  children: JSX.Element | string;
  color: ThemeColors;
}) {
  return (
    <div className={themeColors[color]}>
      <div className="flex justify-between items-start w-full">
        <span className="font-bold uppercase text-sky-100">{title}</span>
        <AddButton onClickFunction={addMethod} />
      </div>
      <div className="flex min-h-minContainer flex-wrap">{children}</div>
    </div>
  );
}
