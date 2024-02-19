import React, { FC, ReactNode, useState } from 'react';
import './MyModal.scss';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

interface MyModalProps {
  children: ReactNode;
  title: string;
  btnInscription: string;
  funcOnConfirm: () => void;
  funcOnClose: () => void;
}

const MyModal: FC<MyModalProps> = (props: MyModalProps) => {

  const [show, setShow] = useState<boolean>(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={props.funcOnClose}>

        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.funcOnClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.funcOnConfirm}>
            {props.btnInscription}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
