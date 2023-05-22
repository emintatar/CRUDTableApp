import { useState } from "react";
import { Button } from "react-bootstrap";
import logo from "../assets/logo.svg";
import plus from "../assets/plus.svg";

const Header = ({ handleAddUserFormShow, filterUsers, roles }) => {
  const [activeLink, setActiveLink] = useState("All Users");
  const activeStyle = {
    color: "var(--blue)",
    borderBottom: "5px solid blue",
  };

  const handleMenu = (item) => {
    setActiveLink(item);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="col-sm-3 ">
            <button className="navbar-brand bg-white border-0 outline-none">
              <img className="logo" src={logo} alt="logo" />
              <span class="logo-text mx-3">Users</span>
            </button>
          </div>
          <div className="col-sm-6">
            <button className="navbar-toggler d-none" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {roles.map((role, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <button
                        style={activeLink === role ? activeStyle : {}}
                        className="nav-link"
                        onClick={() => {
                          handleMenu(role);
                          filterUsers(role);
                        }}
                      >
                        {role}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="d-flex justify-content-end">
              <Button
                className="add-new-user d-flex align-items-center justify-content-center"
                onClick={handleAddUserFormShow}
              >
                <span className="m-1">
                  <img className="plus" src={plus} alt="plus" />
                </span>
                <span className="m-1">Add New User</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
