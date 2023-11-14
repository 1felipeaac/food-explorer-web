/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { Container, Header } from "./styles";
import { Footer } from "../Footer";
import buttonClose from "../../assets/close.svg";
import { Link } from "react-router-dom";
import { Search } from "../Search";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Hyperlink } from "../Hyperlink";

import { useLocation } from "react-router-dom";

export function Menu({ onSearch, id, menuIsOpen, onCloseMenu }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const logged = useAuth();
  const role = logged.user.role;

  const location = useLocation();

  function logOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container id={id} data-menu-is-open={menuIsOpen}>
      <Header>
        <Link onClick={onCloseMenu}>
          <img src={buttonClose} alt="botão de fechar" />
        </Link>
        <h1>Menu</h1>
      </Header>
      <main>
        {!location.pathname.includes("/details") &&
          !location.pathname.includes("/editDish") &&
          !location.pathname.includes("/newDish") && (
            <Search onSearch={onSearch} />
          )}
        {role === "admin" && !location.pathname.includes("/newDish") ? (
          <Hyperlink title={"Novo prato"} to={"/newDish"} />
        ) : null}
        <Hyperlink onClick={logOut} title={"Sair"} />
      </main>
      <Footer />
    </Container>
  );
}
