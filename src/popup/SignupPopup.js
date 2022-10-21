import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

const SignUpPopUp = ({ popUp, setPopUp }) => {
  return (
    <>
      <Modal
        className="check-md"
        size="sm"
        show={popUp}
        onHide={() => setPopUp(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Body>비밀번호를 다시 확인해주세요</Modal.Body>
      </Modal>
    </>
  );
};
export default SignUpPopUp;
