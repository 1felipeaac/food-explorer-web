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
import { Buttons } from "../Header/Mobile/styles";

export function Menu({ onSearch, id, menuIsOpen, onCloseMenu }) {

  const { signOut } = useAuth();
  const navigate = useNavigate();

  const logged = useAuth();
  const role = logged.user.role;

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
        <Search onSearch={onSearch} />
        {role === "admin" ? (
          <Hyperlink title={"Novo prato"} to={"/newDish"} />
        ) : null}
        <Hyperlink onClick={logOut} title={"Sair"} />

      </main>
      <Footer />
    </Container>
  );
}
