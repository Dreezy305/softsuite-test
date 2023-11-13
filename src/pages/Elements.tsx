/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import CreateElementModal from "../components/Modal/Modal";
import Table from "../components/Table/Table";
import { fetchElements } from "../store/elementReducer";
import { useAppDispatch } from "../store/hooks";
import { ElementsColumn } from "../utils/dataTable";
import "./elements.scss";

function Elements(): JSX.Element {
  const store: any = useSelector((state) => state);
  const dispatch = useAppDispatch();
  const elementData = store?.elements?.data?.data;
  console.log(elementData, "store");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch<any>(fetchElements());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      ...ElementsColumn,
      {
        Header: "Action",
        columnId: 8,
        accessor: "actions",
        Cell: ({ row }: any): JSX.Element => {
          const id = row?.original?.account_no;
          const locationObject = row?.original;
          return (
            <div className="btn-group" role="group">
              <button className="btn">
                <i className="bi bi-three-dots"></i>
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <CreateElementModal show={show} handleClose={handleClose} />
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
              <button className="btn ms-2">
                <Filter />
              </button>
            </div>
            <div className="element_row-right">
              <button className="btn" onClick={handleShow}>
                <span>
                  {" "}
                  Create Element <Plus className="ps-1" />
                </span>
              </button>
            </div>
          </div>

          <div className="w-100">
            <Table
              columns={columns}
              data={elementData?.content ?? []}
              isFetching={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Elements;
