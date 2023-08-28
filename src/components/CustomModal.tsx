'use client'
import React from 'react';
import Modal from 'react-modal';
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
  {/*
  <ul className="absolute inset-0 flex items-center justify-center">*/}
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay"
    >
      <Draggable handle=".modal-header">
        <div className="absolute bg-zinc-700 opacity-70 text-white rounded shadow-md max-w-md max-h-96 inset-3 mt-6 text-center ">
          <div className="flex justify-between items-center p-4 modal-header cursor-move">
          {children}
            <XMarkIcon className='h-[24px] w-[24px] cursor-pointer' onClick={closeModal}></XMarkIcon>
          </div>
        </div>
      </Draggable>
    </Modal>
  );
};

export default CustomModal;
