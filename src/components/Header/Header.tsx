import React from "react";
import { ReactComponent as Home } from "../../assets/Home.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrow-up.svg";

function Header(): JSX.Element {
  return (
    <header
      className="d-flex flex-row align-items-center justify-content-between"
      style={{
        borderBottom: "1px solid #E7E7E7",
        padding: "20px, 16px, 20px, 16px",
      }}
    >
      <div className="w-50 d-flex flex-row align-items-center gap-x-3">
        <div className="d-flex flex-row align-items-center">
          <Home />
          <span className="d-flex flex-column">
            <small className="super-menu-item">Switch Module</small>
            <span className="menu-item">Payroll Management</span>
          </span>
          <ArrowDown />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            @example.com
          </span>
        </div>
      </div>

      <div className="w-50"></div>
      {/* 15032612468 */}
    </header>
  );
}

export default Header;
