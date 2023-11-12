/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import "./elements.scss";

function Elements(): JSX.Element {
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
          <li className="breadcrumb-item active" aria-current="page">
            <a
              href="#"
              className="elements_crumb"
              style={{ textDecoration: "none" }}
            >
              Elements
            </a>
          </li>
        </ol>
      </nav>

      <div className="element">
        <h5 className="element_title">Elements</h5>

        <div className="d-flex flex-row align-items-center justify-content-between element_row">
          <div className="element_row-left">
            <div className="input-group element_row-left__search me-2">
              <input
                type="text"
                className="form-control px-4"
                placeholder="Search for element"
                aria-label="Search for element"
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
            <button className="btn btn-primary ms-2">
              <Filter />
            </button>
          </div>
          <div className="element_row-right">
            <button className=""></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elements;
