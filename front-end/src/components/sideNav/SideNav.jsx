import React from "react";
import { FaHome } from "react-icons/fa";

import "./sidenav.css"

const SideNav = () => {
  return (
       <aside className="sidebar border">
        <header className="sidebar-header"> 
            <img className="logo-perfil" src="https://thispersondoesnotexist.com/" alt="fotoexemplo"></img>
        </header>
        <nav>
          <button>
            <span>
               <FaHome />
               <span>Home</span>
            </span>
          </button>
          <button>
            <span>
               <FaHome />
               <span>Home</span>
            </span>
          </button>
        </nav>
       </aside>
  );
};

export default SideNav;
