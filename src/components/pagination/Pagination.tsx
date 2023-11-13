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
  const number = totalItems / 10;
  const roundedUp = Math.ceil(number);
  const newArray: any = [];
  console.log(newArray, "totalItems"); // This will output [undefined, undefined]
  for (let i = 1; i <= roundedUp; i++) {
    newArray.push(i);
  }
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
        disabled={activeItem === 1 ? true : false}
        style={{ outline: "none !important", boxShadow: "none !important" }}
      />
      {newArray?.map((i: any) => (
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
