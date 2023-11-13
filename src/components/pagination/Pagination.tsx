import React from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationComponent({
  activeItem,
  setActiveItem,
  totalItems,
}: {
  activeItem: number | any;
  setActiveItem: any;
  totalItems?: any;
}) {
  let items = 0;

  return (
    <Pagination
      size="sm"
      style={{ outline: "none !important", boxShadow: "none !important" }}
    >
      <Pagination.Prev
        onClick={() =>
          setActiveItem((prev: any) => {
            if (prev <= 0) {
              return 1;
            } else {
              return prev - 1;
            }
          })
        }
        style={{ outline: "none !important", boxShadow: "none !important" }}
      />
      {[1, 2, 3, 4, 5].map((i) => (
        <Pagination.Item
          key={i}
          onClick={() => setActiveItem(i)}
          active={i === activeItem ? true : false}
          style={{ outline: "none !important", boxShadow: "none !important" }}
        >
          {i}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() =>
          setActiveItem((prev: any) => {
            return prev + 1;
          })
        }
        style={{ outline: "none !important", boxShadow: "none !important" }}
      />
    </Pagination>
  );
}

export default PaginationComponent;
