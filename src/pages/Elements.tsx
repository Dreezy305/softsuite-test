/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import DeleteElement from "../components/Modal/DeleteElement";
import CreateElementModal from "../components/Modal/Modal";
import Table from "../components/Table/Table";
import PaginationComponent from "../components/pagination/Pagination";
import { fetchElements } from "../store/elementReducer";
import { useAppDispatch } from "../store/hooks";
import { ElementsColumn } from "../utils/dataTable";
import "./elements.scss";
import { useNavigate } from "react-router-dom";

function Elements(): JSX.Element {
  const navigate = useNavigate()
  const store: any = useSelector((state) => state);
  const dispatch = useAppDispatch();
  const elementData = store?.elements?.data?.data;
  const totalItems = elementData?.total;

  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [ismodalOpen, setIsmodalOpen] = useState(false);
  const [eleId, setEleid] = useState("");
  const [eleData, setEleData] = useState({});

  const handleClose = () => {
    setShow(false);
    setEleData({});
    setEleid("");
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch<any>(fetchElements(page));
  }, [dispatch, page]);

  const columns = useMemo(
    () => [
      ...ElementsColumn,
      {
        Header: "Action",
        columnId: 8,
        accessor: "actions",
        Cell: ({ row }: any): JSX.Element => {
          const id = row?.original?.id;
          return (
            <>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="btn btn-white btn-sm text-center"
                  style={{ background: "#fff" }}
                >
                  <span
                    className="mx-auto text-center"
                    style={{ color: "#000" }}
                  >
                    ...
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-2">
                  <Dropdown.Item
                    as={"button"}
                    onClick={() => navigate(`/element/${id}`)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>{" "}
                    View Element Link
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={"button"}
                    className="pt-3 pb-3"
                    onClick={() => {
                      handleShow();
                      setEleData(row?.original);
                      setEleid(id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>{" "}
                    Edit Element
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={"button"}
                    onClick={() => {
                      setIsmodalOpen(true);
                      setEleid(id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>{" "}
                    Delete Element
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* */}
            </>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <DeleteElement
        show={ismodalOpen}
        handleClose={() => setIsmodalOpen(false)}
        id={eleId}
      />
      <CreateElementModal
        show={show}
        handleClose={handleClose}
        data={eleData}
      />
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
              isFetching={store?.elements?.status === "loading" ? true : false}
            />
            <div className="d-flex flex-row align-items-end justify-content-end">
              {totalItems > 10 && (
                <PaginationComponent
                  activeItem={page}
                  setActiveItem={setPage}
                  totalItems={totalItems}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Elements;
