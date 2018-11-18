import React from "react";
import Pagination from "./Pagination";
import ShowPerPage from "./ShowPerPage";

function PaginationTable({ children }) {
    return <div id="pagination-table">{children}</div>;
}

export {
    Pagination,
    ShowPerPage,
}

export default PaginationTable;