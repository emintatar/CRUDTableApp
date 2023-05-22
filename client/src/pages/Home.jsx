import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Header from "../components/Header";
import AddUserForm from "../components/AddUserForm";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const handleAddUserFormClose = () => setShowAddUserForm(false);
  const handleAddUserFormShow = () => setShowAddUserForm(true);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/users");
      setUsers(response.data);
      const allRoles = [
        "All Users",
        ...new Set(response.data.map((user) => user.role)),
      ];
      setRoles(allRoles);
    } catch (error) {
      console.log(error);
    }
  };

  const filterUsers = (role) => {
    if (role === "All Users") {
      setFilteredUsers([]);
      return;
    }
    const newUsers = users.filter((user) => user.role === role);
    setFilteredUsers(newUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container-fluid d-flex flex-column justify-content-center">
      <Header
        handleAddUserFormShow={handleAddUserFormShow}
        filterUsers={filterUsers}
        roles={roles}
      />
      <AddUserForm
        showAddUserForm={showAddUserForm}
        handleAddUserFormClose={handleAddUserFormClose}
        roles={roles}
      />
      <UserList
        users={filteredUsers.length > 0 ? filteredUsers : users}
        roles={roles}
      />
    </div>
  );
};

export default Home;
