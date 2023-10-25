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

import arrowLeft from "../../../assets/arrowLeft.svg"

export function NewDish() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");

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
      if (newIngredient) {
        return alert("Ingrediente(s) não adicionado");
      }
      await api.post("/dishes", {
        name,
        category,
        description,
        ingredients,
        value,
      });
      alert("Prato criado com sucesso");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Container>
      <HeaderDesktop />
      <HeaderMobile />

      <div id="formDish">
        <Hyperlink icon={<ReactSVG src={arrowLeft}/>} title={"Voltar"} to={"/"} />

        <h1>Novo prato</h1>

        <Input
          title={"Imagem do prato"}
          type={"file"}
          placeholder={"Selecione imagem"}
        />
        <Input
          title={"Nome"}
          type={"text"}
          placeholder={"Ex.: Cuscuz"}
          onChange={(e) => setName(e.target.value)}
        />
        <Select onChange={(e) => setCategory(e.target.value)} />
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
        <Input
          title={"Preço"}
          type={"number"}
          placeholder={"R$00,00"}
          onChange={(e) => setValue(e.target.value)}
        />
        <Textarea
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button title={"Salvar Alterações"} onClick={handleNewDish} />
      </div>
      <Footer />
    </Container>
  );
}
