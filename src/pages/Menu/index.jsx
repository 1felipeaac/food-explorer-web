/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { Container, Header } from "./styles";
import { Link } from "../../Components/Link";
import { Footer } from "../../Components/Footer";
import buttonClose from "../../assets/close.svg";
// import iconSearch from '../../assets/search.svg'
import { Search } from "../../components/Search";

export function Menu({ title }) {
  return (
    <Container>
      <Header>
        <img src={buttonClose} alt="botão de fechar" />
        <h1>Menu</h1>
      </Header>
      <main>
        <Search />
        <Link title={title} />
      </main>
      <Footer />
    </Container>
  );
}
