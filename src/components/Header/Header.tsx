import React from "react";
import { ReactComponent as Ellipse } from "../../assets/Ellipse1.svg";
import { ReactComponent as Home } from "../../assets/Home.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrow-up.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as Search } from "../../assets/search.svg";

function Header(): JSX.Element {
  return (
    <header
      className="d-flex flex-row align-items-center justify-content-between"
      style={{
        borderBottom: "1px solid #E7E7E7",
        padding: "10px 30px",
      }}
    >
      <div className="w-75 d-flex flex-row align-items-center">
        <div className="home-stack">
          <div className="org-stack">
            <Home />
            <span className="d-flex flex-column org-name">
              <small className="change">Change Organization</small>
              <span className="org-title">PaperSoft Limited</span>
            </span>
          </div>
          <ArrowDown />
        </div>

        <div className="input-group search-group">
          <input
            type="text"
            className="form-control px-4"
            placeholder="Search for anything"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            style={{ outline: "none", boxShadow: "none" }}
          />
          <span
            className="input-group-text"
            id="basic-addon2"
            style={{ background: "#4BAA79" }}
          >
            <Search />
          </span>
        </div>
      </div>

      <div className="w-25 d-flex flex-row align-items-center justify-content-between">
        <div className="bell">
          <Bell />
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between payrol-mgr">
          <Ellipse />
          <div className="d-flex flex-column">
            <span className="payrol-mgr_name">Henry Okoro</span>
            <span className="payrol-mgr_role">Payroll Manager</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
