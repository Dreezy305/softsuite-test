import dayjs from "dayjs";
import { ELEMENT_CAT, ELEMENT_CLASS } from "./months";

export const ElementsColumn = [
  { Header: "Name", columnId: 1, accessor: "name" },
  {
    Header: "Element Category",
    columnId: 2,
    accessor: "element_category",
    Cell: ({ row }: any) => {
      const idToFilter = row?.original?.categoryValueId;
      const filteredData: any = ELEMENT_CAT.filter(
        (item: any) => item.id === idToFilter
      );

      return (
        <div className="" role="group">
          {filteredData[0]?.name}
        </div>
      );
    },
  },
  {
    Header: "Element Classification",
    columnId: 3,
    accessor: "element_classification",
    Cell: ({ row }: any) => {
      const idToFilter = row?.original?.classificationValueId;
      const filteredData: any = ELEMENT_CLASS.filter(
        (item: any) => item.id === idToFilter
      );

      return (
        <div className="" role="group">
          {filteredData[0]?.name}
        </div>
      );
    },
  },
  { Header: "Status", columnId: 4, accessor: "status" },
  {
    Header: "Date and time modified",
    columnId: 5,
    accessor: "createdAt",
    Cell: ({ row }: any) => {
      return (
        <div className="" role="group">
          {dayjs(row?.original?.createdAt).format("YYYY-MM-DD || h:mma") ||
            "N/A"}
        </div>
      );
    },
  },
  { Header: "Modified By", columnId: 6, accessor: "modifiedBy" },
];
