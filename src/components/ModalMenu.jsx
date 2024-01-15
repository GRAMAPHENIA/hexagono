"use client";

import React, { useState } from "react";

const ModalMenu = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-menu-overlay">
      <div className="modal-menu">
        <button
          className="close-button mt-8 mr-40 bg-[var(--card-dark)] text-[var(--font-semi-light)] text-xl h-12 w-12 rounded-full sombra border border-[var(--card-light)]"
          onClick={onClose}
        >
        X
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalMenu;
