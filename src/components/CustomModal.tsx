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
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay"
    >
      <Draggable handle=".modal-header">
        <div className=" bg-zinc-700 opacity-70 text-white rounded shadow-md max-w-md ">
          <div className="flex justify-between items-center p-4 modal-header cursor-move">
            {/* Adicione um ícone ou título para a barra de cabeçalho */}
            <h3>Título do Modal</h3>
            {/* <button onClick={closeModal}>Fechar</button> */}
            <XMarkIcon className='h-[24px] w-[24px] cursor-pointer' onClick={closeModal}></XMarkIcon>
          </div>
          {children}
        </div>
      </Draggable>
    </Modal>
  );
};

export default CustomModal;
