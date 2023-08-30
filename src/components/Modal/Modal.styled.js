import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';

export const ModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  //transform: scale(0);
  //transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  &.active {
    //transform: scale(1);
    opacity: 1;
    pointer-events: all;
  }
`;

export const ModalContainer = styled.div`
  padding: 28px 32px;
  margin: 20px;
  background-color: #e5e5e5;
  border-radius: 30px;

  transform: scale(0);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 300px;
  &.active {
    transform: scale(1);
  }
`;

export const ModalContent = styled.div`
  text-align: center;
`;
export const ButtonClose = styled(RiCloseFill)`
  position: fixed;
  top: 18px;
  right: 18px;
  width: 18px;
  height: 18px;
  padding: 10px;
  cursor: pointer;
`;