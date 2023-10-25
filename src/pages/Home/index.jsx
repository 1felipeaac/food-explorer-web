import { HeaderMobile } from "../../components/Header/Mobile";
import { HeaderDesktop } from "../../components/Header/Desktop";
import { Footer } from "../../components/Footer";
import { CardDish } from "../../components/CardDish";
import { Container } from "./styles";
import home from "../../assets/homeImg.svg";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dishesFound, setDishesFound] = useState([]);
  const [errorCheck, setErrorCheck] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [visible, setVisible] = useState(true);

  function handleSearch(value) {
    setSearchValue(value);
  }

  // console.log(dishesFound);

  // useEffect(() => {}, [dishesFound])

  useEffect(() => {
    setErrorCheck(false);
    setMessageError("");

    async function fetchSearchDish() {
      try {
        const response = await api.get(`/dishes?name=${searchValue}`);

        if (response.data.length > 0) {
          setDishesFound(response.data);
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
      console.log(dishes);
    }

    fetchDishes();
  }, []);
  return (
    <Container>
      <HeaderDesktop onSearch={handleSearch} />
      <HeaderMobile />
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
          {dishes &&
            dishes.map((dish) => {
              if (dish.category === "café da manhã") {
                return (
                  <CardDish key={dish.id} name={dish.name} price={dish.value} />
                );
              }
            })}
        </div>

        {errorCheck ? (
          <div>{messageError}</div>
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
