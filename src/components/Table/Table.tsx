import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { useTable } from "react-table";
import { JSX } from "react/jsx-runtime";
// import { ReactComponent as Empty } from "../../assets/empty.svg";
// import EmptyResponse from "./EmptyResponse";
import "./table.scss";

function Table({
  columns,
  data,
  isFetching,
  navigateTo,
  locationData,
}: {
  columns: any;
  data: any;
  isFetching: boolean;
  navigateTo?: string;
  locationData?: any;
}): JSX.Element {
  const navigate = useNavigate();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <div className="table-responsive datatable-custom">
      <table
        id="datatable"
        className="table table-hover table-thead-bordered table-nowrap table-align-middle card-table mt-4"
        style={{ width: "100%" }}
        {...getTableProps()}
      >
        <thead
          className="thead-light fw-semibold react-table-head"
          style={{ background: "#2d416f" }}
        >
          {headerGroups.map(
            (
              headerGroup: {
                getHeaderGroupProps: () => JSX.IntrinsicAttributes &
                  React.ClassAttributes<HTMLTableRowElement> &
                  React.HTMLAttributes<HTMLTableRowElement>;
                headers: any[];
              },
              index: any
            ) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index: any) => (
                  <th
                    className="fw-semibold"
                    {...column.getHeaderProps()}
                    key={index}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            )
          )}
        </thead>
        {isFetching ? (
          <tbody>
            <tr>
              {columns?.map((i: any, index: any) => (
                <>
                  <td key={index}>
                    <Skeleton height={30} />
                  </td>
                </>
              ))}
            </tr>
          </tbody>
        ) : (
          <tbody {...getTableBodyProps()}>
            <>
              {rows.map(
                (
                  row: {
                    getRowProps: () => JSX.IntrinsicAttributes &
                      React.ClassAttributes<HTMLTableRowElement> &
                      React.HTMLAttributes<HTMLTableRowElement>;
                    cells: any[];
                  },
                  i: any
                ) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={i}>
                      {row.cells.map((cell, index: any) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            key={index}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              const id = cell?.row?.original?.id;
                              const locationObject = cell?.row?.original;
                              if (navigateTo && !locationData) {
                                navigate(`${navigateTo}${id}`, {
                                  state: { ...locationObject },
                                });
                              } else if (navigateTo && locationData) {
                                navigate(`${navigateTo}${id}`, {
                                  state: { ...locationObject, ...locationData },
                                });
                              }
                            }}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                }
              )}
              {/* {rows.length <= 0 && (
                <tr>
                  <td colSpan={columns.length}>
                    <EmptyResponse title="No record found" image={<Empty />} />
                  </td>
                </tr>
              )} */}
            </>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default Table;
