import React, { useState } from "react";

import { styles } from "../style";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-12 w-12 object-contain" />
        </Link>
        {/* ***************************************** desktop nav links ************************************* */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-green-400" : "text-secondary"
                } hover:text-green-400 text-[18px] font-medium`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        {/* *************************** small screens navbar on toggle ********************* */}

        <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <motion.ul
              initial={{ y: -100 }}
              transition={{ duration: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="list-none flex flex-col gap-5"
            >
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-green-400" : "text-black"
                    } hover:text-green-400 text-[18px] font-medium max-md:text-white`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
