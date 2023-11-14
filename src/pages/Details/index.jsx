import { Header } from "../../components/Header";
import { Hyperlink } from "../../Components/Hyperlink";
import { Footer } from "../../Components/Footer";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ReactSVG } from "react-svg";
import { Tags } from "../../components/Tags";
import empty from "../../assets/default-dish.svg";
import back from "../../assets/arrowLeft.svg";

import { useAuth } from "../../hooks/auth";
import { InputCounter } from "../../components/InputCounter";

export function Details() {
  const [data, setData] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const params = useParams();
  const logged = useAuth();
  const role = logged.user.role;


  useEffect(() => {
    async function fetchDish() {
      const dish = await api.get(`dishes/${params.id}`);
      setData(dish.data.response);
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <Header
        menuIsOpen={menuIsOpen}
        onOpenMenu={() => setMenuIsOpen(true)}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      {data && (
        <main id="mainDetails">
          <Hyperlink icon={<ReactSVG src={back} />} to={"/"} title={"voltar"} />
          <div id="contentDetails">
            <img
              src={
                data.image
                  ? `${api.defaults.baseURL}/files/${data.image}`
                  : empty
              }
              alt="dish's image"
            />
            <span id="dishDetails">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <section>
                {data.ingredients.map((ingredient, index) => (
                  <Tags key={index} name={ingredient} />
                ))}
              </section>
              {role === "admin" ? (
                <Button
                  toPage={`/editDish/${data.id}`}
                  title={"Editar prato"}
                />
              ) : (
                <div id="submitCostumer">
                  <InputCounter />
                  <Button
                    id={"submitButton"}
                    toPage={`/orders`}
                    title={`incluir ∙ R$ ${data.value.toFixed(2)}`}
                  />
                </div>
              )}
            </span>
          </div>
        </main>
      )}
      <Footer />
    </Container>
  );
}
