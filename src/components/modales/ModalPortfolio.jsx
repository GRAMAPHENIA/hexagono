"use client";

import React, { useState } from "react";

const ModalPortfolio = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-Portfolio">
      <div className="max-w-screen-xl max-h-[700px]">
        <button
          className="close-button mt-5 mr-5 lg:mt-16 lg:mr-36 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light border border-[var(--card-light)] z-50"
          onClick={onClose}
        >
          Volver
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalPortfolio;
