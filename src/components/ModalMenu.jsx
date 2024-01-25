"use client";

import React, { useState } from "react";

const ModalMenu = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-menu-overlay bg-[#1011129f] backdrop-blur-sm bg-opacity-80">
      <div className="modal-menu">
        <button
          className="close-button mt-2 lg:mt-8 mr-40 bg-[var(--card-dark)] text-[var(--font-semi-light)] text-xl h-8
          w-8 lg:h-12 lg:w-12 rounded-full sombra border border-[var(--card-light)]"
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
