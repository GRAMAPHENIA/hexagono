"use client";

import React, { useState } from "react";

const ModalPlanes = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-menu-overlay-planes bg-[var(--dark)] backdrop-blur-sm ">
      <div className="modal-menu-planes mx-auto w-[270px] lg:max-w-[1280px] lg:max-h-[750px]">
        <div className="relative flex justify-end m-4">
          <button
            className="absolute mt-0 mr-0 lg:-mt-1 lg:-mr-1 bg-[var(--danger)] text-[#253342] text-xl h-8 w-8 lg:h-10 lg:w-10 rounded-full sombra-danger border border-[var(--card-light)]"
            onClick={onClose}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalPlanes;
