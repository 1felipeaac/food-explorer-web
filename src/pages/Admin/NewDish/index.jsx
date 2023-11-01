/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { useState } from "react";

import { api } from "../../../services/api";

import { useNavigate } from "react-router-dom";

import { Hyperlink } from "../../../components/Hyperlink";
import { Footer } from "../../../components/Footer";
import { HeaderDesktop } from "../../../components/Header/Desktop";
import { HeaderMobile } from "../../../components/Header/Mobile";
import { Container } from "./styles";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Textarea } from "../../../components/Textarea";
import { Button } from "../../../components/Button";
import { Ingredients } from "../../../components/Ingredients";
import { ReactSVG } from "react-svg";
import { useAuth } from "../../../hooks/auth";
import upload from "../../../assets/upload.svg";

import arrowLeft from "../../../assets/arrowLeft.svg";

export function NewDish() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");

  const id = useAuth();

  const userId = id.user.id;
  // console.log(userId)

  const navigate = useNavigate();

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleNewDish() {
    try {
      if (!name) {
        return alert("Nome não adicionado");
      }
      if (!description) {
        return alert("Descrição não adicionada");
      }
      if (!category) {
        return alert("Categoria não adicionada");
      }
      if (!value) {
        return alert("Preço não adicionado");
      }
      if (!newIngredient) {
        return alert("Ingrediente(s) não adicionado");
      }

      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("category", category);
      formData.append("ingredients", ingredients);
      formData.append("value", value);
      formData.append("description", description);

      await api.post("/dishes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Prato criado com sucesso");
      navigate("/");
    } catch (AxiosError) {
      console.log(AxiosError);
      alert(AxiosError.response.data.message);
    }
  }

  return (
    <Container>
      <HeaderDesktop />
      <HeaderMobile />

      <div id="formDish">
        <Hyperlink
          icon={<ReactSVG src={arrowLeft} />}
          title={"Voltar"}
          to={"/"}
        />

        <h1>Novo prato</h1>

        <Input
          idContainer={"inputImageComponent"}
          id={"inputImage"}
          title={"Imagem do Prato"}
          icon={<ReactSVG src={upload}/>}
          type={"file"}
          placeholder={"Selecione imagem"}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Input
          idContainer={"inputNameComponent"}
          id={"inputName"}
          title={"Nome"}
          type={"text"}
          placeholder={"Ex.: Cuscuz"}
          onChange={(e) => setName(e.target.value)}
        />
        <Select onChange={(e) => setCategory(e.target.value)} />

        <div id="tags">
          <label>Ingredientes</label>
          <section>
            {ingredients.map((ingredient, index) => (
              <Ingredients
                key={String(index)}
                value={ingredient}
                onClick={() => handleRemoveIngredients(ingredient)}
              />
            ))}
            <Ingredients
              isNew
              value={newIngredient}
              placeholder="Novo ingrediente"
              onChange={(e) => setNewIngredient(e.target.value)}
              onClick={handleAddIngredients}
            />
          </section>
        </div>
        <Input
          idContainer={"inputValueContainer"}
          id={"inputValue"}
          title={"Preço"}
          type={"number"}
          placeholder={"R$00,00"}
          onChange={(e) => setValue(e.target.value)}
        />
        <Textarea
          id={"textareaForm"}
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          id={"buttonForm"}
          title={"Salvar Alterações"}
          onClick={handleNewDish}
        />
      </div>
      <Footer />
    </Container>
  );
}
