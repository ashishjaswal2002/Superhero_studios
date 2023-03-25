import React from "react";

import { NavLink, Link } from "react-router-dom";

export const DrawerUp = () => {
  return (
    <>
      <div className="h-[50px] w-[100%] bg-slate-100 bg-opacity-40 backdrop-blur-lg flex justify-center items-center gap-12 fixed top-0  z-10  ">
        <div
          className="transition-all duration-300
      hover:scale-105"
          id="done"
        >
          <Link
            to="/"
            id="resp"
            className="  border border-stone-800 px-3 py-2 bg-yellow-300 bg-opacity-60 hover:bg-opacity-100 rounded-[.2em] transition-all duration-300  "
          >
            Home
          </Link>
        </div>

        <div
          className="transition-all duration-300
      hover:scale-105 "
        >
          <NavLink
            id="resp"
            to="marvelChar"
            className="border border-stone-800 px-3 py-2 bg-yellow-300 bg-opacity-60 hover:bg-opacity-100 rounded-[.2em] transition-all duration-300 "
          >
            Marvel Characters
          </NavLink>
        </div>
        <div className="transition-all duration-300 hover:scale-105 ">
          <NavLink
            id="resp"
            to="marvelComics"
            className="border border-stone-800 px-3 py-2 bg-yellow-300 bg-opacity-60 hover:bg-opacity-100 rounded-[.2em]  transition-all duration-300 hover:scale-105"
          >
            Marvel Comics
          </NavLink>
        </div>
      </div>
    </>
  );
};
