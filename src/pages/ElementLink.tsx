/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./elements.scss";

function ElementLink(): JSX.Element {
  const navigate = useNavigate();
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

      <div className="element">
        <h5 className="element_title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
            onClick={() => navigate(`/elements`)}
            style={{ cursor: "pointer" }}
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </h5>
      </div>
    </div>
  );
}

export default ElementLink;
