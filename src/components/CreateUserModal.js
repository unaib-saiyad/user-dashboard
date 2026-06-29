import Modal from "react-bootstrap/Modal";
import UserForm from "./UserForm";

function CreateUserModal({ show, handleClose, onSubmit }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create New User</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <UserForm
          onSubmit={onSubmit}
          onCancel={handleClose}
        />
      </Modal.Body>
    </Modal>
  );
}

export default CreateUserModal;