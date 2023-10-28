import { HeaderDesktop } from "../../components/Header/Desktop";
import { HeaderMobile } from "../../components/Header/Mobile";
import { Hyperlink } from "../../components/Hyperlink";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ReactSVG } from "react-svg";
import back from "../../assets/arrowLeft.svg";
import { Tags } from "../../components/Tags";

export function Details() {
  const [data, setData] = useState(null);
  // const [ingerdients, setIngredients] = useState([])
  const params = useParams();

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`dishes/${params.id}`);
      setData(response.data);
      // console.log(response);
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <HeaderMobile />
      <HeaderDesktop />
      {data && (
        <main>
          <Hyperlink icon={<ReactSVG src={back} />} to={"/"} title={"voltar"} />
          <div>
            <img alt="dish's image" />
            <h2>{data.dish.name}</h2>
            <p>{data.dish.description}</p>
            <section>
              {data.ingredients.map((ingredient, index) => (
                <Tags key={index} name={ingredient} />
                // <div key={ingredient.id}>{ingredient}</div>
              ))}
            </section>
            <Button toPage={`/editDish/${data.id}`} title={"Editar prato"} />
          </div>
        </main>
      )}
      <Footer />
    </Container>
  );
}
