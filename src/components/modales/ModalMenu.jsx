"use client";

import React, { useEffect } from "react";

const ModalMenu = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      // Al montar el modal, desactivar el scroll
      document.documentElement.style.overflow = "hidden";
    } else {
      // Modal activado
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      // Al desmontar el modal, activar el scroll nuevamente
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]); // Este efecto se ejecutará cada vez que cambie el estado de isOpen

  return isOpen ? (
    <div className="modal-menu-overlay bg-[#1011129f] backdrop-blur-sm bg-opacity-80">
      <div className="modal-menu mx-auto max-w-screen-xl max-h-[700px]">
        <div className="relative flex justify-end">
          <button
            className="absolute mt-4 mr-4 lg:-mt-1 lg:-mr-1 bg-[var(--danger)] text-[#253342] text-xl h-8 w-8 lg:h-10 lg:w-10 rounded-full sombra-danger border border-[var(--card-light)]"
            onClick={onClose}
          >
            X
          </button> 
        </div>
        {children}
      </div>
    </div>
  ) : null;
};

export default ModalMenu;
