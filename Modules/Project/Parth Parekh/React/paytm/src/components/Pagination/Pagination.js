import React, { useEffect } from "react";

export default function Pagination({
    currentPage,
    setCurrentPage,
    itemPerPage,
    pageNumberLimit,
    maxPageNumberLimit,
    setmaxPageNumberLimit,
    minPageNumberLimit,
    setminPageNumberLimit,
    data,
    currentItems,
    setCurrentItems,
}) {
    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
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
    currentItems = data.slice(indexofFirstItem, indexofLastItem);
    useEffect(() => {
        setCurrentItems(currentItems);
    }, [currentItems]);

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    return (
        <>
            {pages.length > 1 ? (
                <ul
                    className="pagination pagination-lg"
                    style={{ cursor: "pointer" }}
                >
                    {currentPage === 1 ? (
                        <li className="page-item page-link text-muted">
                            {" "}
                            Prev
                        </li>
                    ) : (
                        <li
                            className="page-item page-link"
                            onClick={handlePrevBtn}
                        >
                            {" "}
                            Prev
                        </li>
                    )}

                    {renderPageNumbers}
                    {currentPage === pages.length ? (
                        <li className="page-item  page-link text-muted">
                            {" "}
                            Next
                        </li>
                    ) : (
                        <li
                            className="page-item page-link"
                            onClick={handleNextBtn}
                        >
                            {" "}
                            Next
                        </li>
                    )}
                </ul>
            ) : (
                ""
            )}
        </>
    );
}
