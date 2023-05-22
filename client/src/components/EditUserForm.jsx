import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import axios from "axios";

const EditUserForm = ({
  roles,
  user,
  handleEditUserFormClose,
  showEditUserForm,
}) => {
  const id = user.id;
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [avatar, setAvatar] = useState(user.avatar);

  const avatarOptions = [
    { id: 1, src: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, src: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 3, src: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, src: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 5, src: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 6, src: "https://randomuser.me/api/portraits/women/3.jpg" },
  ];

  const handleEditUser = (user) => {
    axios
      .put(`http://localhost:4000/users/${id}`, user)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      className="modal"
      show={showEditUserForm}
      onHide={handleEditUserFormClose}
    >
      <Modal.Body className="modal-body d-flex flex-column p-5">
        <Form
          className="modal-form d-flex flex-column"
          onSubmit={(e) => {
            e.preventDefault();
            handleEditUser({ name, username, email, role, avatar });
            handleEditUserFormClose();
          }}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              className="p-2"
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Control
              className="p-2"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              className="p-2"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formRole" className="mb-3">
            <Form.Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="p-2"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formAvatar" className="mb-3">
            <Form.Label>Select Avatar</Form.Label>
            <div className="d-flex justify-content-between align-items-center">
              {avatarOptions.map((avatar) => (
                <div key={avatar.id} className="avatar-option">
                  <img
                    src={avatar.src}
                    alt={`Avatar ${avatar.id}`}
                    onClick={() => setAvatar(avatar.src)}
                    className={avatar.src === avatar ? "selected" : ""}
                  />
                </div>
              ))}
            </div>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="form-button text-center d-grid mx-auto"
          >
            Update User
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUserForm;
