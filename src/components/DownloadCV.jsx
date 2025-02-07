import React from "react";
import { Dialog } from "@headlessui/react";
import resume from "/Professional CV Reseume.pdf";
import { motion } from "framer-motion";

const DownloadCV = ({ isOpen, setIsOpen }) => {
  const handleDownload = () => {
    setIsOpen(false);
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  const flip = {
    hidden: {
      transform: "scale(0) rotateX(-360deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: " scale(1) rotateX(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transform: "scale(0) rotateX(360deg)",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <Dialog
      open={isOpen}
      onClose={() => {}}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-black/80"
        aria-hidden="true"
      />
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 flex items-center justify-center"
      >
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-5">
          <Dialog.Title className="text-black text-center">
            It seems you want to download my Resume!
          </Dialog.Title>
          <Dialog.Description className="text-black bg-red-500 px-2 rounded-md my-4">
            Note: This is one time popup!
          </Dialog.Description>
          <div className="flex gap-5">
            <button
              onClick={() => handleDownload()}
              className="text-white bg-green-700 hover:text-black rounded-md px-4 py-2 border-0"
            >
              <a href={resume} target="_blank" rel="noopener noreferrer">
                See Resume
              </a>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white bg-green-700 hover:text-black rounded-md px-4 py-2 border-0"
            >
              Cancel
            </button>
          </div>
        </Dialog.Panel>
      </motion.div>
    </Dialog>
  );
};

export default DownloadCV;
