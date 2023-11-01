import { HeaderMobile } from "../../components/Header/Mobile";
import { HeaderDesktop } from "../../components/Header/Desktop";
import { Footer } from "../../components/Footer";
import { CardDish } from "../../components/CardDish";
import { Container } from "./styles";
import home from "../../assets/homeImg.svg";

import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Menu } from "../../Components/MobileMenu";
import empty from "../../assets/default-dish.svg"
import favorite from "../../assets/favorite.svg"
import edit from "../../assets/edit.svg"
import { useAuth } from "../../hooks/auth";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dishesFound, setDishesFound] = useState([]);
  const [errorCheck, setErrorCheck] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [visible, setVisible] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  const logged = useAuth();
  const role = logged.user.role;

  function handleSearch(value) {
    setDishesFound([]);
    setSearchValue(value);
    setVisible(true);
    setMessageError("");
  }

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

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get("/dishes");
      setDishes(response.data.dishes);

      
      // setImageUrl(api.defaults.baseURL/files/)
  // const imageUrl = `${api.defaults.baseURL/files/${}}`

    }
    setDishesFound([]);
    fetchDishes();
  }, []);
  return (
    <Container>
      <HeaderDesktop onSearch={handleSearch} />
      <HeaderMobile onOpenMenu={() => setMenuIsOpen(true)} />
      <Menu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        id="mobileMenu"
        onSearch={handleSearch}
        title={"Sair"}
      />
      <main>
        <div id="display">
          <div id="banner"></div>
          <img id="imgHome" src={home} alt="" />
          <span id="presentation">
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </span>
        </div>
        <div id="showDishes">
          {visible
            ? dishes &&
              dishes.map((dish) => (
                <CardDish
                  icon={role === 'admin' ? edit: favorite}
                  to={`details/${dish.id}`}
                  key={dish.id}
                  name={dish.name}
                  price={dish.value}
                  src={
                    dish.image ? `${api.defaults.baseURL}/files/${dish.image}`: empty
                  }
                />
              ))
            : undefined}
        </div>

        {errorCheck ? (
          <div id="errorMessage">{messageError}</div>
        ) : (
          <div id="searchDishes">
            {Array.isArray(dishesFound) &&
              dishesFound.map((dish) => (
                <CardDish key={dish.id} name={dish.name} price={dish.value} />
              ))}
          </div>
        )}
      </main>
      <Footer />
    </Container>
  );
}
