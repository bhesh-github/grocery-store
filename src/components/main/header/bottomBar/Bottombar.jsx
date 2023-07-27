import { useState } from "react";
import VerticalMenu from "./VerticalMenu";

const Bottombar = () => {
  const [bottomBarSearchInput, setBottomBarSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setBottomBarSearchInput("");
    }, 1000);
  };

  return (
    <div className="bottom-bar header-bottom hidden-sm hidden-xs">
      <div className="container">
        <div className=" elements-wrapper">
          <div className="col-lg-3 col-md-4">
            <VerticalMenu />
          </div>
          <div className="header-search-bar layout-01">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              action="#"
              className="form-search"
              name="desktop-seacrh"
              method="get"
            >
              <input
                type="text"
                // name="s"
                className="input-text"
                value={bottomBarSearchInput}
                onChange={(e) => {
                  setBottomBarSearchInput(e.target.value);
                }}
                placeholder="Search here..."
              />
              <button type="submit" className="btn-submit">
                <i className="biolife-icon icon-search"></i>
              </button>
            </form>
          </div>
          <div className="live-info">
            <i className="fa fa-phone phone-icon" aria-hidden="true"></i>
            <div className="detail">
              <div className="telephone">
                <b className="phone-number">(+900) 123 456 7891</b>
              </div>
              <div className="working-time">
                Mon-Fri: 8:30am-7:30pm; Sat-Sun: 9:30am-4:30pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
