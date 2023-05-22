import bin from "../assets/bin.svg";

const Search = ({ handleSearch, handleDeleteClick, query }) => {
  return (
    <div className="row">
      <div className="col-9 mt-3 mb-4">
        <div className="search">
          <form className="form-inline">
            <div className="input-group">
              <span className="input-group-text bg-white border-0 outline-0">
                <i className="fas fa-search"></i>
              </span>

              <input
                className="form-control border-0 outline-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={handleSearch}
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="col-3 mt-3 mb-4 d-flex align-items-end justify-content-end">
        <button
          className="delete-button d-flex justify-content-end align-items-center p-3 border-0 outline-0"
          onClick={handleDeleteClick}
        >
          <img src={bin} alt="bin" className="mx-2" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
