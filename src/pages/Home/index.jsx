import { HeaderMobile } from "../../components/Header/Mobile";
import { HeaderDesktop } from "../../components/Header/Desktop";
import { Footer } from "../../Components/Footer";
import { CardDish } from "../../components/CardDish";
import { Container } from "./styles";
import home from "../../assets/homeImg.svg";

import { api } from "../../services/api";
import { useEffect, useState } from "react";
// import { useAuth } from "../../hooks/auth";

export function Home() {
  const [data, setData] = useState([]);
  // const [dishes, setDishes] = useState([])
  // const logged = useAuth();
  // const role = logged.user.role;

  const dishes = data.dishes;

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get("/dishes");
      setData(response.data);
    }

    fetchDishes();
  }, []);
  return (
    <Container>
      <HeaderDesktop />
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
            dishes.map((dish) => 
              {if(dish.category === 'café da manhã'){
                  return (
                    <CardDish key={dish.id} name={dish.name} price={dish.value} />
                  )
              }}
          )}
        {/* </div>
        <div>
          {dishes &&
            dishes.map((dish) => 
              {if(dish.category === 'café da manhã'){
                  return (
                    <CardDish key={dish.id} name={dish.name} price={dish.value} />
                  )
              }}
          )} */}
        </div>
      </main>
      <Footer />
    </Container>
  );
}
