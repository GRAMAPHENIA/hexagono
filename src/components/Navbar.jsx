"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ListaModalMenu from "@/components/modales/ListaModalMenu.jsx";
import ModalMenu from "@/components/modales/ModalMenu.jsx";
import ModalPortfolio from "@/components/modales/ModalPortfolio";
import ChildrenModalPortfolio from "@/components/childrens/ChildrenModalPortfolio";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalPortfolioOpen, setModalPortfolioOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModalPortfolio = () => {
    setModalPortfolioOpen(true);
  };

  const closeModalPortfolio = () => {
    setModalPortfolioOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [isModalPortfolioOpen]);

  useEffect(() => {
    if (isModalPortfolioOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [isModalPortfolioOpen]);

  return (
    <>
      <nav className="col-span-6 pr-6 pt-3 lg:p-12">
        <ul className="flex justify-end">
          <li className="space-x-4 flex flex-row align-middle">
            <button
              onClick={openModalPortfolio}
              className="text-[var(--button-dark)] bg-[var(--font-semi-light)] px-4 py-2 rounded-full sombra border border-[var(--card-light)]"
            >
              <Link href=""></Link>
              portfolio
            </button>{" "}
            <Link href="#consultas">
              <button className="font-light bg-[var(--card-dark)] text-[var(--font-light)] px-4 py-2 rounded-full sombra border border-[var(--card-light)]">
                contacto
              </button>{" "}
            </Link>
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
        <ListaModalMenu handleCloseModal={closeModal} />
      </ModalMenu>
      <ModalPortfolio
        isOpen={isModalPortfolioOpen}
        onClose={closeModalPortfolio}
      >
        <ChildrenModalPortfolio />
      </ModalPortfolio>
    </>
  );
};

export default Navbar;
