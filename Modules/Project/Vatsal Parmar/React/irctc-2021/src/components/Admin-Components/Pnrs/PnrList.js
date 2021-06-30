import React, { useState, useEffect } from "react";

const PnrList = ({ pnrs, viewPnr }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];

  for (let i = 1; i <= Math.ceil(pnrs.length / itemPerPage); i++) {
    pages.push(i);
  }
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? "page-item page-link bg-primary text-white"
              : "page-item page-link "
          }
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const indexofLastItem = currentPage * itemPerPage;
  const indexofFirstItem = indexofLastItem - itemPerPage;

  var currentItems = pnrs.slice(indexofFirstItem, indexofLastItem);

  useEffect(() => {
    currentItems = pnrs.slice(indexofFirstItem, indexofLastItem);
    setCurrentPage(1);
  }, [pnrs]);

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div>
      {currentItems.length > 0 ? (
        <table className="table table-hover table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">Train</th>
              <th scope="col">Date</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody className="text-capitalize">
            {currentItems.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th scope="row">
                    {(currentPage - 1) * itemPerPage + index + 1}
                  </th>
                  <td>
                    {item.user_id.first_name + " " + item.user_id.last_name}
                  </td>
                  <td>{item.train.train_name}</td>
                  <td>{item.journey_date}</td>
                  <td>{item.from.station_name}</td>
                  <td>{item.to.station_name}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => viewPnr(item._id)}
                    >
                      View
                    </button>
                  </td>
                  {/* <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteStation(item._id)}
                >
                  Delete
                </button>
              </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="my-5 alert alert-danger w-75 mx-auto">
          <h2 className="text-center text-danger">No Records Available</h2>
        </div>
      )}
      {pages.length > 1 && (
        <ul className="pagination" style={{ cursor: "pointer" }}>
          {currentPage === 1 ? (
            <li className="page-item page-link text-muted"> Prev</li>
          ) : (
            <li className="page-item page-link" onClick={handlePrevBtn}>
              {" "}
              Prev
            </li>
          )}

          {renderPageNumbers}
          {currentPage === pages.length ? (
            <li className="page-item page-link text-muted"> Next</li>
          ) : (
            <li className="page-item page-link" onClick={handleNextBtn}>
              {" "}
              Next
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default PnrList;
