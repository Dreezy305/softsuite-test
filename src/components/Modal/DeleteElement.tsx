import React from "react";
import Modal from "react-bootstrap/Modal";

function DeleteElement({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
      }}
      size="sm"
      className="px-3"
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
    </Modal>
  );
}

export default DeleteElement;
