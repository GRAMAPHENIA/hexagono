"use client";

import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal mx-auto max-w-screen-xl max-h-[700px]">
        <button
          className="close-button mt-10 mr-10 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light border border-[var(--card-light)]"
          onClick={onClose}
        >
          Volver
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
