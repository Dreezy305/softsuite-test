/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./elements.scss";

function ElementLink(): JSX.Element {
  return (
    <div
      className="px-5 py-3"
      style={{ background: "#F4F6F8", minHeight: "100vh" }}
    >
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a
              href=""
              className="elements_link"
              style={{ textDecoration: "none" }}
            >
              Payroll Management
            </a>
          </li>
          <li className="breadcrumb-item">
            <a
              href="#"
              className="elements_link"
              style={{ textDecoration: "none" }}
            >
              Element Setup
            </a>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <a
              href="/elements"
              className="elements_link"
              style={{ textDecoration: "none" }}
            >
              Elements
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a
              href="#"
              className="elements_crumb"
              style={{ textDecoration: "none" }}
            >
              Element Link
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default ElementLink;
