// Styling Imports
import { Container, Logo, Content, Orders, Menu } from "./styles";

// Components Imports
import { InputSearch } from "../InputSearch";
import { ButtonIcon } from "../ButtonIcon";

// Strategic Imports
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

// Icons Imports
import { PiReceipt, PiX } from "react-icons/pi";
import { FiLogOut, FiMenu } from "react-icons/fi";

// Image Imports
import logo from "../../assets/Logo.svg";

export function Header({ setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const [userRequests, setUserRequests] = useState();
  const [ordersPending, setOrdersPending] = useState();

  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  // Check if the user is admin
  const isAdmin = user.role === "admin";

  function handleFavorites() {
    navigate("/favorites");
  }

  function handleOrder() {
    navigate("/orders");
  }

  function handleNewDish() {
    navigate("/newdish");
  }

  function handleCart() {
    navigate("/cart");
  }

  function handleLogout() {
    navigate("/");
    signOut();
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleOpen();
    }
  }

  // Function to change hamburger menu to open or close
  function handleOpen() {
    setMenuOpen(!menuOpen);
    document.querySelectorAll(".hamb").forEach(element => {
      element.classList.toggle("hide");
    });;
    document.getElementById("content").classList.toggle("hide");
  }

  useEffect(() => {
    async function handleUserRequests() {
      const response = await api.get("/requests");

      setUserRequests([...response.data]);
    }

    handleUserRequests();
  }, [userRequests]);

  useEffect(() => {
    async function handleOrders() {
      const response = await api.get("/purchases");

      setOrdersPending(response.data);
    }

    handleOrders();
  }, [ordersPending]);

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
          <InputSearch
            placeholder="Busque por pratos"
            icon
            onClick={handleOpen}
            onChange={setSearch}
            onKeyDown={handleKeyDown}
          />

          <div className="buttons">

            {isAdmin ?
              <>
                <button onClick={handleNewDish}>
                  Novo prato
                </button>

                <button onClick={handleOrder}>
                  Pedidos
                </button>
              </>

              :

              <button onClick={handleOrder}>
                Histórico de pedidos
              </button>
            }

            <button onClick={handleFavorites}>
              Meus Favoritos
            </button>

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

        <InputSearch
          placeholder="Busque por pratos"
          icon
          onChange={setSearch}
          onKeyDown={handleKeyDown}
        />

        <div className="desktop buttons">
          <button onClick={handleFavorites}>
            Meus favoritos
          </button>
          {
            isAdmin ?
              <button onClick={handleNewDish}>
                Novo prato
              </button>

              :

              <button onClick={handleOrder}>
                Histórico de pedidos
              </button>
          }
        </div>

        <div className="desktop">
          {isAdmin ?
            <ButtonIcon
              className="orders"
              order
              title="Pedidos" icon
              quantity={ordersPending ? ordersPending.filter(order => order.status !== "delivered").length : 0}
              onClick={handleOrder}
            />

            :

            <ButtonIcon
              className="orders"
              order
              title="Pedidos" icon
              quantity={userRequests ? userRequests.filter(order => order.status !== "delivered").length : 0}
              onClick={handleCart}
            />

          }
        </div>

        <div className="mobile">
          {isAdmin ?

            ""

            :

            <Orders className="mobile" onClick={handleCart}>
              <PiReceipt size={32} />
              <span>{userRequests ? userRequests.length : 0}</span>
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
