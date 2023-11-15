// Styling Imports
import { Container, Logo, Content, Orders, Menu } from "./styles";

// Components Imports
import { Input } from "../Input";
import { ButtonIcon } from "../ButtonIcon";

// Strategic Imports
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Icons Imports
import { PiReceipt, PiX } from "react-icons/pi";
import { FiLogOut, FiMenu, FiSearch } from "react-icons/fi";

// Image Imports
import logo from "../../assets/Logo.svg";

export function Header() {
  const [orders, setOrders] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Check if the user is admin
  const isAdmin = true;

  function handleNewDish() {
    navigate("/newdish");
  }

  function handleLogout() {
    alert("Teste");
  }

  // Function to change hamburger menu to open or close
  function handleOpen() {
    setMenuOpen(!menuOpen);
    document.querySelectorAll(".hamb").forEach(element => {
      element.classList.toggle("hide");
    });;
    document.getElementById("content").classList.toggle("hide");
  }

  return (
    <Container>
      <Menu id="menu" className="hamb hide">
        <button onClick={handleOpen}>
          <PiX size={24} />
        </button>
        <h2>Menu</h2>
      </Menu>

      <nav className="hamb hide">
        <div>
          <Input
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />

          <div className="buttons">
            {isAdmin ?
              <button  onClick={handleNewDish}>
                Novo prato
              </button>
              :
              ""
            }
            <button onClick={handleLogout}>
              Sair
            </button>
          </div>
        </div>
      </nav>

      <Content id="content">
        <div className="mobile">
          <button onClick={handleOpen}>
            <FiMenu size={20} />
          </button>
        </div>

        <Logo>
          <Link to="/">
            <img src={logo} width={24} height={24} />
            <h1>food explorer</h1>
            <span>{isAdmin ? "admin" : ''}</span>
          </Link>
        </Logo>

        <Input
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredients"
        />

        <div className="desktop">
          {isAdmin ?
            <ButtonIcon
              title="Novo prato"
              onClick={handleNewDish}
            />

            :

            <ButtonIcon
              order
              title="Pedidos" icon
              quantity={orders}
            />
          }
        </div>

        <div className="mobile">
          {isAdmin ?

            ""

            :

            <Orders className="mobile">
              <PiReceipt size={32} />
              <span>{orders ? orders : 0}</span>
            </Orders>
          }
        </div>

        <button className="desktop" onClick={handleLogout}>
          <FiLogOut size={32} />
        </button>
      </Content>
    </Container>
  );
}
