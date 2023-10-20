import { HeaderMobile } from "../../components/Header/Mobile";
import { HeaderDesktop } from "../../components/Header/Desktop";
import { Footer } from "../../components/Footer";
import { CardDish } from "../../components/CardDish";
import { Container } from "./styles";
import home from "../../assets/homeImg.svg";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Home() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dishesFound, setDishesFound] = useState([]);

  const dishes = data.dishes;
  const searchDishes = dishesFound.dishes;


  function handleSearch(value) {
    setSearchValue(value);
  }

  useEffect(() => {
    async function fetchSearchDish() {
      const response = await api.get(`/dishes?name=${searchValue}`);
      setDishesFound(response.data);
      // console.log(dishesFound);
    }
    fetchSearchDish();
  }, [searchValue]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get("/dishes");
      setData(response.data);
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
        {searchDishes && searchDishes.map((dish)=> 
        <CardDish key={dish.id} name={dish.name} price={dish.value}/>
        )}
      </main>
      <Footer />
    </Container>
  );
}
