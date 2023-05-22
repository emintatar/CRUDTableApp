const Pagination = ({ currentPage, setCurrentPage, pageNumbers }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li
              className={currentPage === 1 ? "page-item disabled" : "page-item"}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <i className="fas fa-chevron-left"></i>
                <span className="sr-only">Previous</span>
              </button>
            </li>
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={
                  currentPage === number ? "page-item active" : "page-item"
                }
              >
                <button
                  onClick={() => setCurrentPage(number)}
                  className="page-link"
                  style={
                    currentPage === number
                      ? { backgroundColor: "var(--blue)", color: "white" }
                      : {color: "var(--light-gray-bg)"}
                  }
                >
                  {number}
                </button>
              </li>
            ))}
            <li
              className={
                currentPage === pageNumbers.length
                  ? "page-item disabled"
                  : "page-item"
              }
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === pageNumbers.length}
              >
                <i className="fas fa-chevron-right"></i>
                <span className="sr-only">Next</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
