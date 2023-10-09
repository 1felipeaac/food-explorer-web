import { HeaderMobile } from "../../components/Header/Mobile";
import { HeaderDesktop } from "../../components/Header/Desktop";
import { Footer } from "../../Components/Footer";
import { Container } from "./styles";
import home from "../../assets/homeImg.svg";

// import { api } from "../../services/api";
// import { useEffect, useState } from "react";

export function Home() {
  // const [dishes, setDishes] = useState([])
    
  // useEffect(() => {
  //   async function fetchDishes(){
  //     try {
  //       const response = await api.get("/dishes")
  //       setDishes(response.data)
  //       console.log(dishes)
        
  //     } catch (error) {
  //       console.error(error.message)
  //     }
  //   }

  //   fetchDishes()
  // },[])
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
      </main>
      {/* {dishes && dishes.map((dish) => 
        <div key={dish.id}>
          {dish.name}
          {dish.category}
          {dish.description}
          {dish.value}
        </div>)
      } */}
      <Footer />
    </Container>
  );
}
