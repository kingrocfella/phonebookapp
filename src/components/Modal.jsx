import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

const ModalComponent = ({
  show,
  handleClose,
  size = "md",
  title,
  body,
  footer,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size={size}
      className="datatest-modal"
    >
      {title && (
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            <strong>{title}</strong>
          </Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body className="datatest-body modal-scrollable">{body}</Modal.Body>
      {footer ? (
        <Modal.Footer className="datatest-footer">{footer}</Modal.Footer>
      ) : null}
    </Modal>
  );
};

ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
  footer: PropTypes.element,
  handleClose: PropTypes.func.isRequired,
  size: PropTypes.string,
};

export default ModalComponent;
