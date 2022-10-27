import Pagination from "react-js-pagination";
import { useState } from "react";
import "./Paging.css";

const Paging = ({ page, setPage, count }) => {
  return (
    <div className="Pagination">
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        onChange={setPage}
      />
    </div>
  );
};
export default Paging;
