import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import "./sidenav.css"
import { Divider } from "antd";
import Logo from "../../assets/icones/solarcocacola.png"
import { Link } from "react-router-dom";




const SideNav = () => {
  return (
    <>
      <aside className="sidebar">
        <img src={Logo} alt="logo" width={250} />

        <header className="sidebar-header">
          <img className="logo-perfil" src="https://thispersondoesnotexist.com/" alt="fotoexemplo"></img>
          <div className="info-perfil">
            <h1>Exemplo</h1>
            <p>exemplo@gmail.com</p>
          </div>
        </header>
        <Divider style={{ margin: "10px 0", backgroundColor: "#9CA3AF" }} />
        <nav>
          <Link to="/">
            <button>
              <span>
                <FaHome />
                <span>Página inicial</span>
              </span>
            </button>
          </Link>

          <Link to="/produtos">
            <button>
              <span>
                <FaHome />
                <span>Produtos</span>
              </span>
            </button>
          </Link>

        </nav>
      </aside>
    </>
  )
}

export default SideNav
