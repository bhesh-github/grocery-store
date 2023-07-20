import Middlebar from "./Middlebar";
import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
const Header = () => {
  return (
    <div className="header-comp">
      <Topbar />
      <Middlebar />
      <Bottombar />
      {/* --------------------------------------------------------- */}
    </div>
  );
};

export default Header;
