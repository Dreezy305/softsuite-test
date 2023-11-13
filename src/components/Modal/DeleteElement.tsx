import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { fetchElements } from "../../store/elementReducer";
import { useAppDispatch } from "../../store/hooks";

function DeleteElement({
  show,
  handleClose,
  id,
}: {
  show: boolean;
  handleClose: () => void;
  id: string;
}) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `https://650af6bedfd73d1fab094cf7.mockapi.io/elements/${id}`
      );
      if (response.status === 200) {
        handleClose();
        setLoading(false);
        dispatch<any>(fetchElements(1));
      }
    } catch (error) {
      setLoading(false);
      return error;
    }
  };
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
      <Modal.Body>
        <div className="row">
          <div className="d-flex flex-column pb-2">
            <h5 className="text-center">
              Are you sure you want to delete Element?
            </h5>
            <span className="text-center">You can't reverse this action</span>
          </div>
          <div className="d-flex flex-row pt-3">
            <Button
              variant="secondary"
              style={{ width: "35%" }}
              className="me-2"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              className="w-75 ms-2"
              onClick={handleDelete}
            >
              {loading ? "Deleting..." : "Yes, Delete"}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteElement;
