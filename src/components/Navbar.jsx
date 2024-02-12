"use client";

import React, { useState } from "react";
import Image from "next/image";

import ListaModalMenu from "@/components/ListaModalMenu.jsx";

import ModalMenu from "@/components/ModalMenu.jsx";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <nav className="col-span-6 pr-6 pt-3 lg:p-12">
        <ul className="flex justify-end">
          <li className="space-x-4 flex flex-row align-middle">
            <button className="text-[var(--button-dark)] hidden lg:block bg-[var(--font-semi-light)] px-4 py-2 rounded-full sombra border border-[var(--card-light)]">
              presupuestos
            </button>
            <button className="font-light hidden lg:block bg-[var(--card-dark)] text-[var(--font-light)] px-4 py-2 rounded-full sombra border border-[var(--card-light)]">
              contacto
            </button>
            <button
              onClick={openModal}
              className="bg-[var(--card-dark)] text-[var(--font-semi-light)] text-xl lg:text-3xl h-11
              w-11 lg:h-12 lg:w-12 rounded-full sombra border border-[var(--card-light)]"
            >
              ≋
            </button>
          </li>
        </ul>
      </nav>
      <ModalMenu isOpen={isModalOpen} onClose={closeModal}>
        <ListaModalMenu />
      </ModalMenu>
    </>
  );
};

export default Navbar;
