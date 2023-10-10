/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { Container, Header } from "./styles";
import { Hyperlink } from "../../Components/Hyperlink";
import { Footer } from "../../Components/Footer";
import buttonClose from "../../assets/close.svg";
import { Link } from "react-router-dom";
import { Search } from "../../components/Search";

import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom";

export function Menu({ title: name }) {
  const {signOut} = useAuth()
  const navigate = useNavigate()

  function logOut(){
    signOut()
    navigate(-1)
  }
  
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
        {name && <Hyperlink onClick={logOut} title={name} />}
      </main>
      <Footer />
    </Container>
  );
}
