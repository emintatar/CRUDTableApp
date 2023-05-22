import { useState } from "react";
import axios from "axios";
import Search from "./Search";
import User from "./User";
import Pagination from "./Pagination";

const UserList = ({ users, roles }) => {
  const [query, setQuery] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  // Pagination variables
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const totalPages = Math.ceil(users.length / recordsPerPage);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const records = users.slice(indexOfFirstRecord, indexOfLastRecord);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
    setIsChecked(true);
  };

  const handleDeleteClick = () => {
    if (isChecked) {
      for (let key in checkedItems) {
        if (checkedItems[key] === true) {
          axios
            .delete(`http://localhost:4000/users/${key}`)
            .then((res) => {
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/users/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Search
        handleSearch={handleSearch}
        handleDeleteClick={handleDeleteClick}
      />

      <div className="row">
        <div className="table-responsive">
          <table className="table table">
            <thead>
              <tr>
                <th>
                  <span>
                    <input type="checkbox" disabled />
                  </span>
                </th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {records
                .filter(
                  (user) =>
                    user.username.toLowerCase().includes(query.toLowerCase()) ||
                    user.email.toLowerCase().includes(query.toLowerCase())
                )
                .map((user) => (
                  <User
                    key={user.id}
                    user={user}
                    roles={roles}
                    handleDelete={handleDelete}
                    handleCheckboxChange={handleCheckboxChange}
                    checkedItems={checkedItems}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageNumbers={pageNumbers}
      />
    </>
  );
};

export default UserList;
