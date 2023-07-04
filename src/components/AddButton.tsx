import AddIcon from "../assets/circle-plus.svg";

export default function AddButton({
  onClickFunction,
}: {
  onClickFunction: () => void;
}) {
  return (
    <button
      className="bg-orange-300 rounded-lg p-1 flex items-center justify-center hover:bg-orange-100 h-8 w-8"
      onClick={onClickFunction}
    >
      <img src={AddIcon} alt="add icon" />
    </button>
  );
}
