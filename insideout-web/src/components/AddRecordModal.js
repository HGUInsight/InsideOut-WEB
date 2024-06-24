// src/components/AddRecordModal.js
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddRecordModal({
  show,
  handleClose,
  handleAdd,
  newRecord,
  setNewRecord,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>새로운 레코드 추가</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Object.keys(newRecord).map((key) => (
          <Form.Group controlId={`form${key}`} key={key} className="mb-3">
            <Form.Label>{key}</Form.Label>
            <Form.Control
              type="text"
              placeholder={key}
              value={newRecord[key]}
              onChange={(e) =>
                setNewRecord({ ...newRecord, [key]: e.target.value })
              }
            />
          </Form.Group>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          추가
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddRecordModal;
