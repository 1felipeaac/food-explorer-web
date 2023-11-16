import { HeaderDesktop } from "../../components/Header/Desktop";
import { HeaderMobile } from "../../components/Header/Mobile";
import { Hyperlink } from "../../components/Hyperlink";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Menu } from "../../components/MobileMenu";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ReactSVG } from "react-svg";
import { Tags } from "../../components/Tags";
import empty from "../../assets/default-dish.svg";
import back from "../../assets/arrowLeft.svg";

import {useAuth} from '../../hooks/auth'
import { InputCounter } from "../../Components/InputCounter";

export function Details() {
  const [data, setData] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const params = useParams();
  const logged = useAuth();
  const role = logged.user.role;

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <HeaderDesktop/>
      <HeaderMobile onOpenMenu={() => setMenuIsOpen(true)} />
      <Menu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        id="mobileMenu"
        title={"Sair"}
      />
      {data && (
        <main id="mainDetails">
          <Hyperlink icon={<ReactSVG src={back} />} to={"/"} title={"voltar"} />
          <div id="contentDetails">
            <img
              src={
                data.dish.image
                  ? `${api.defaults.baseURL}/files/${data.dish.image}`
                  : empty
              }
              alt="dish's image"
            />
            <span id="dishDetails">
              <h2>{data.dish.name}</h2>
              <p>{data.dish.description}</p>
              <section>
                {data.dish.ingredients.map((ingredient, index) => (
                  <Tags key={index} name={ingredient} />
                ))}
              </section>
              {
                role === "admin" ? 
                <Button toPage={`/editDish/${data.dish.id}`} title={"Editar prato"} />
                :
                <div id="submitCostumer">
                  <InputCounter/>
                  <Button id={"submitButton"} toPage={`/orders`} title={`incluir ∙ R$ ${data.dish.value.toFixed(2)}`} />
                </div>
              }
            </span>
          </div>
        </main>
      )}
      <Footer />
    </Container>
  );
}
