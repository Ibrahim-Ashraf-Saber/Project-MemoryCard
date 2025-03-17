import icon from "../assets/icon.png";

function Header() {
  return (
    <div className="flex items-center justify-center gap-2">
      <img src={icon} />
      <div className="text-2xl text-white">
        <span className="text-red-600">Poké</span>Memo
      </div>
    </div>
  );
}

export default Header;
