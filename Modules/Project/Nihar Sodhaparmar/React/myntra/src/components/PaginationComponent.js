import React, { useState } from "react";

const RenderData = (data) => {
  return (
    <ul>
      {data.map((todo, index) => {
        return <li key={index}>{todo._id}</li>;
      })}
    </ul>
  );
};

export default function PaginationComponent() {
  // *************** PAGINATION ***************
  const [data] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [pageNumberLimit] = useState(25);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(25);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          onClick={() => handleClick(number)}
          className={`page-item  ${currentPage === number ? "active" : null}`}
        >
          <div className="page-link">{number}</div>
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextBtnClick = () => {
    if (currentPage !== pages[pages.length - 1]) {
      setCurrentPage(currentPage + 1);

      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  };

  const handlePreviousBtnClick = () => {
    if (currentPage !== pages[0]) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className="page-item">
        <span className="page-link" onClick={handleNextBtnClick}>
          &hellip;
        </span>
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= pageNumberLimit) {
    pageDecrementBtn = (
      <li className="page-item">
        <span className="page-link" onClick={handlePreviousBtnClick}>
          &hellip;
        </span>
      </li>
    );
  }
  // *************** END OF PAGINATION ***************

  return (
    <div>
      {RenderData(currentItems)}
      <ul className="pagination">
        <li
          className={`page-item ${
            currentPage === pages[0] ? "disabled" : null
          }`}
        >
          <span className="page-link" onClick={handlePreviousBtnClick}>
            Previous
          </span>
        </li>

        {pageDecrementBtn}

        {renderPageNumbers}

        {pageIncrementBtn}

        <li
          className={`page-item ${
            currentPage === pages[pages.length - 1] ? "disabled" : null
          }`}
        >
          <span className="page-link" onClick={handleNextBtnClick}>
            Next
          </span>
        </li>
      </ul>
    </div>
  );
}
