import React from 'react';
import { ButtonClose, ModalBackdrop, ModalContainer, ModalContent } from './Modal.styled';


const Modal = ({ children, active, setActive }) => {



  return (
    <>
      <ModalBackdrop
        className={active ? 'active' : ''}
        onClick={() => setActive(false)}
      >
        <ModalContainer
          className={active ? 'active' : ''}
          onClick={e => e.stopPropagation()}
        >
          <ButtonClose
            type="button"
            aria-label="close"
            onClick={() => setActive(false)}
          ></ButtonClose>
          <ModalContent>{children}</ModalContent>
        </ModalContainer>
      </ModalBackdrop>
    </>
  );
};

export default Modal;
