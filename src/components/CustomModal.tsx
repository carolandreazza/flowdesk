'use client'
import React, { useEffect } from 'react';
import Modal, { setAppElement } from 'react-modal';
import Draggable from 'react-draggable';
import {
    XMarkIcon,
  } from "@heroicons/react/24/outline";

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const CustomModal = ({ isOpen, closeModal, children }: CustomModalProps) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <Draggable handle=".modal-header">
        <div className="absolute bg-zinc-700 opacity-70 text-white rounded shadow-md max-w-md max-h-96 inset-3 mt-6 text-center ">
          <XMarkIcon className='h-[24px] w-[24px] cursor-pointer mt-3 ml-[25rem] -mb-9' onClick={closeModal}></XMarkIcon>
          
          <div className="flex justify-between items-center p-4 modal-header cursor-move">
          {children}
          </div>
        </div>
      </Draggable>
    </Modal>
  );
};

export default CustomModal;
