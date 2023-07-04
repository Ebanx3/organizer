import SettingsIcon from "../assets/settings.svg";

export default function ConfigButton({
  onClick,
}: {
  onClick: (value: boolean) => void;
}) {
  return (
    <button
      onClick={() => onClick(true)}
      className=" hover:rotate-90 ease-in transition-all duration-300 hover:scale-125 "
    >
      <img src={SettingsIcon} alt="" />
    </button>
  );
}
