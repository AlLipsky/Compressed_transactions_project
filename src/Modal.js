import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const ModalComponent = (props) => {
  const { className, modalBodyData, headerName } = props;

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        fade={false}
        toggle={props.headerCloserFunc}
        className={className}
      >
        <ModalHeader toggle={props.headerCloserFunc}>{headerName}</ModalHeader>
        <ModalBody
          style={{
            width: "500px",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {modalBodyData}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalComponent;
