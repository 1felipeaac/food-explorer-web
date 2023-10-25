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
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Menu({ title: name }) {
  const [searchValue, setSearchValue] = useState("");
  const [dishesFound, setDishesFound] = useState([]);
  const [errorCheck, setErrorCheck] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [visible, setVisible] = useState(true);

  const { signOut } = useAuth();
  const navigate = useNavigate();

  const logged = useAuth();
  const role = logged.user.role;

  function logOut() {
    signOut();
    navigate(-1);
  }
  // console.log(dishesFound)
  function handleSearch(value) {
    setDishesFound([]);
    setSearchValue(value);
    setVisible(true);
    setMessageError("");
  }

  console.log(dishesFound);
  useEffect(() => {
    setErrorCheck(false);
    setMessageError("");

    async function fetchSearchDish() {
      try {
        const response = await api.get(`/dishes?name=${searchValue}`);

        if (response.data.length > 0) {
          setDishesFound(response.data);

          setVisible(false);
        }
      } catch (error) {
        setErrorCheck(true);
        setMessageError(error.response.data.message);
      }
    }
    fetchSearchDish();
  }, [searchValue]);

  return (
    <Container>
      <Header>
        <Link to="/">
          <img src={buttonClose} alt="botão de fechar" />
        </Link>
        <h1>Menu</h1>
      </Header>
      <main>
        <Search onSearch={handleSearch} />
        {role === "admin" ? (
          <Hyperlink title={"Novo prato"} to={"/newDish"} />
        ) : null}
        {name && <Hyperlink onClick={logOut} title={name} />}
      </main>
      <Footer />
    </Container>
  );
}
