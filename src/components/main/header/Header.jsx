  import Middlebar from "./Middlebar";
import Topbar from "./Topbar";
import Bottombar from "./bottomBar/Bottombar";
const Header = () => {
  return (
    <div className="header-comp header-area style-01 layout-03">
      <Topbar />
      <Middlebar />
      <Bottombar />
      {/* --------------------------------------------------------- */}
    </div>
  );
};

export default Header;
