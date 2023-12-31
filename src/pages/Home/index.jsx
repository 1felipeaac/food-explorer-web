import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { Slider } from "../../components/Slider";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import home from "../../assets/homeImg.svg";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [errorCheck, setErrorCheck] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [dishesFound, setDishesFound] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [visible, setVisible] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [mainDishes, setMainDishes] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrink] = useState([]);

  const arrayMainDishes = []
  const arrayDesserts = []
  const arrayDrinks = []


  const logged = useAuth();
  const role = logged.user.role;

  function handleSearch(value) {
    setDishesFound([]);
    setSearchValue(value);
    setVisible(true);
    setMessageError("");
  }

  useEffect(() => {
    dishes.map(dish => {
      if (dish.category === "Pratos Principais"){
        arrayMainDishes.push(dish);
      }else if(dish.category === "Sobremesas"){
        arrayDesserts.push(dish);
      }else{
        arrayDrinks.push(dish);
      }
    })
    setMainDishes(arrayMainDishes);
    setDesserts(arrayDesserts);
    setDrink(arrayDrinks)
  }, [dishes])

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get("/dishes");
      setDishes(response.data.dishes);

    }
    setDishesFound([]);
    fetchDishes();
  }, []);

  useEffect(() => {
    setErrorCheck(false);
    setMessageError("");

    async function fetchSearchDish() {
      try {
        const dish = await api.get(`/dishes?name=${searchValue}`);

        if (dish.data.length > 0) {
          setDishesFound(dish.data);
          setVisible(false);
        }
      } catch (error) {
        if(error.response.request.status === 400){
          return 
        }
        setErrorCheck(true);
        setMessageError(error.response.data.message);
      }
    }
    fetchSearchDish();
  }, [searchValue]);

  return (
    <Container>
      <Header
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        onOpenMenu={() => setMenuIsOpen(true)}
        onSearch={handleSearch}
      />
      <main id="mainHome">
        <div id="display">
          <div id="banner"></div>
          <img id="imgHome" src={home} alt="" />
          <span id="presentation">
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </span>
        </div>
        {visible ? dishes && 
          <>
            <Slider title={"Pratos Principais"} dishes={mainDishes} role={role}/>
            <Slider title={"Sobremesas"} dishes={desserts} role={role} />
            <Slider title={"Bebidas"} dishes={drinks} role={role} />
          </>
           : <></>}

        {errorCheck ? (
          <div id="errorMessage">{messageError}</div>
        ) : (
          <div id="searchDishes">
            {Array.isArray(dishesFound) && (
              <Slider dishes={dishesFound} role={role} />
            )}
          </div>
        )}
      </main>
      <Footer />
    </Container>
  );
}
