const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  handlePageChange,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the page numbers to display in the pagination
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }
  }

  return (
    <nav>
      <ul className="pagination flex justify-center">
        <li className="page-item">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="page-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l disabled:bg-gray-400"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number, index) => (
          <li key={index} className="page-item">
            {number === "..." ? (
              <button className="page-link bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded">
                ...
              </button>
            ) : (
              <button
                onClick={() => handlePageChange(number)}
                className={`page-link ${
                  number === currentPage
                    ? "bg-blue-700 text-white font-bold"
                    : "bg-gray-100 text-blue-500 hover:bg-blue-200"
                } py-2 px-4 rounded`}
              >
                {number}
              </button>
            )}
          </li>
        ))}
        <li className="page-item">
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="page-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r disabled:bg-gray-400"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
