/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from "dayjs";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ELEMENT_CAT, ELEMENT_CLASS, PAY_RUN } from "../utils/months";
import "./elements.scss";

function ElementLink(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location?.state;
  console.log(data);

  const getValue = (data: any, idtoFilter: any) => {
    const filteredData: any = data.filter(
      (item: any) => item.id === idtoFilter
    );
    return filteredData[0]?.name;
  };

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

      <div className="element px-4">
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

        <div className="text-start">
          <h5 className="element_title">Element Details</h5>

          <div className="w-100 border">
            <div className="container text-start">
              <div className="row align-items-start divider">
                {Object.entries(data ?? {}).map(([key, value]: any) =>
                  key === "payRunId" ||
                  key === "classificationId" ||
                  key === "categoryId" ||
                  key === "id" ||
                  key === "createdAt" ? null : key === "prorate" &&
                    value === "" ? null : (
                    <div
                      className={`col-lg-6 border text-start pt-2 pb-3`}
                      key={key + value}
                    >
                      <span className={`d-flex flex-column org-name`}>
                        <small className="change text-uppercase">
                          {key === "payRunValueId"
                            ? "PayRun"
                            : key === "classificationValueId"
                            ? "Element Classification"
                            : key === "categoryValueId"
                            ? "Element Category"
                            : key === "effectiveStartDate"
                            ? "Effective start date"
                            : key === "effectiveEndDate"
                            ? "Effective end date"
                            : key === "reportingName"
                            ? "reporting name"
                            : key === "processingType"
                            ? "processing type"
                            : key === "payFrequency"
                            ? "pay frequency"
                            : key === "modifiedBy"
                            ? "modified by"
                            : key}
                        </small>
                        {Array.isArray(value) ? (
                          <>
                            {value.map((i) => (
                              <span className="org-title text-capitalize">
                                {i}
                              </span>
                            ))}
                          </>
                        ) : (
                          <>
                            {key === "status" ? (
                              <span className="org-title text-capitalize">
                                {value === true
                                  ? "active"
                                  : value === false
                                  ? "inactive"
                                  : value}
                              </span>
                            ) : key === "createdAt" ? (
                              <>
                                <span>
                                  {dayjs(value).format("YYYY-MM-DD || h:mma") ||
                                    "N/A"}
                                </span>
                              </>
                            ) : key === "classificationValueId" ? (
                              <span className="org-title text-capitalize">
                                {getValue(ELEMENT_CLASS, value)}
                              </span>
                            ) : key === "categoryValueId" ? (
                              <span className="org-title text-capitalize">
                                {getValue(ELEMENT_CAT, value)}
                              </span>
                            ) : key === "payRunValueId" ? (
                              <span className="org-title text-capitalize">
                                {getValue(PAY_RUN, value)}
                              </span>
                            ) : (
                              <span className="org-title text-capitalize">
                                {value}
                              </span>
                            )}
                          </>
                        )}
                      </span>
                    </div>
                  )
                )}

                {/* <div className="col text-start"></div> */}
              </div>
            </div>
            {/* <table className="w-100">
              <thead style={{ display: "none" }}>
                <tr>
                  <th>1</th>
                  <th>2</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(left ?? {}).map(([key, value]: any) => (
                  <tr key={key}>
                    <td>
                      {key}
                      {value}
                    </td>
                   
                  </tr>
                ))}
                {Object.entries(right ?? {}).map(([key, value]: any) => (
                  <tr key={key}>
                    <td>
                      {key}
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElementLink;
