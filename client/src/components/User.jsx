import { useState } from "react";
import EditUserForm from "./EditUserForm";

const User = ({
  handleDelete,
  checkedItems,
  handleCheckboxChange,
  user,
  roles,
}) => {
  const [showEditUserForm, setShowEditUserForm] = useState(false);
  const handleEditUserFormClose = () => setShowEditUserForm(false);
  const handleEditUserFormShow = () => setShowEditUserForm(true);

  return (
    <>
      <tr className="user" key={user.id}>
        <td>
          <span className="center-span">
            <input
              type="checkbox"
              name={user.id}
              checked={checkedItems[user.id]}
              onChange={handleCheckboxChange}
            />
          </span>
        </td>

        <td>
          <span>
            <img src={user.avatar} alt="avatar" />
          </span>
        </td>

        <td>
          <span>{user.name}</span>
        </td>

        <td>
          <span>{user.username}</span>
        </td>

        <td>
          <span>{user.email}</span>
        </td>

        <td>
          <span>{user.role}</span>
        </td>

        <td>
          <span className="edit-delete-buttons">
            <button
              onClick={() => handleEditUserFormShow(user.id)}
              className="edit btn btn-link"
              title="Edit"
              data-toggle="tooltip"
            >
              <i className="material-icons">&#xE254;</i>
            </button>

            <button
              className="delete btn btn-link"
              data-toggle="tooltip"
              title="Delete"
              onClick={() => handleDelete(user.id)}
            >
              <i className="material-icons">&#xE872;</i>
            </button>
          </span>
        </td>
      </tr>

      <EditUserForm
        user={user}
        roles={roles}
        handleEditUserFormClose={handleEditUserFormClose}
        showEditUserForm={showEditUserForm}
      />
    </>
  );
};

export default User;
