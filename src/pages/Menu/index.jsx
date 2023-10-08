/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { Container, Header } from "./styles";
import { Hyperlink } from "../../components/Hyperlink";
import { Footer } from "../../Components/Footer";
import buttonClose from "../../assets/close.svg";
import { Link } from "react-router-dom";
import { Search } from "../../components/Search";

export function Menu({ title: name }) {
  return (
    <Container>
      <Header>
        <Link to="/">
          <img src={buttonClose} alt="botão de fechar" />
        </Link>
        <h1>Menu</h1>
      </Header>
      <main>
        <Search />
        {name && <Hyperlink title={name} />}
      </main>
      <Footer />
    </Container>
  );
}
