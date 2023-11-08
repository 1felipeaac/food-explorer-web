/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";

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
import { useParams } from "react-router-dom";

import upload from "../../../assets/upload.svg";

import arrowLeft from "../../../assets/arrowLeft.svg";

export function EditDish() {
  const [data, setData] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  const params = useParams();

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleRemove() {
    const confirm = window.confirm("Tem certeza que quer excluir o prato");
    if (confirm) {
      await api.delete(`/dishes/${params.id}`);
      navigate("/");
    }
  }

  function handleBack() {
    navigate(-1);
  }

  async function handleEditDish() {
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

      const formData = new FormData();

      if (image) {
        formData.append("image", image);
      }
      formData.append("name", name);
      formData.append("category", category);
      formData.append("ingredients", ingredients);
      formData.append("value", value);
      formData.append("description", description);
      await api.patch(`/dishes/${params.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Prato atualizado com sucesso");
      handleBack();
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      const { dish, ingredients } = response.data;

      setData(response.data);
      setName(dish.name);
      setCategory(dish.category);
      setDescription(dish.description);
      setValue(dish.value);
      setImage(dish.image);
      setIngredients(ingredients.map((ingredient) => ingredient));

      // console.log(dish);
    }
    fetchDish();
  }, []);

  return (
    <Container>
      <HeaderDesktop />
      <HeaderMobile />

      {data && (
        <div id="edit-formDish">
          <Hyperlink
            icon={<ReactSVG src={arrowLeft} />}
            title={"Voltar"}
            to={"/"}
          />

          <h1>Editar prato</h1>

          <Input
            idContainer={"edit-inputImageComponent"}
            id={"edit-inputImage"}
            icon={<ReactSVG src={upload} />}
            title={"Imagem do prato"}
            type={"file"}
            placeholder={"Selecione imagem"}
            onChange={(e) => setImage(e.target.files[0])}
            required={false}
          />
          <Input
            idContainer={"edit-inputNameComponent"}
            id={"edit-inputName"}
            title={"Nome"}
            type={"text"}
            placeholder={"Ex.: Cuscuz"}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <div id="edit-Tags">
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
            idContainer={"edit-inputValueComponent"}
            id={"edit-inputValue"}
            title={"Preço"}
            type={"number"}
            placeholder={"R$00,00"}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Textarea
            id={"edit-textareaForm"}
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <div id="buttons">
            <Button
              id={"deleteButton"}
              title={"Excluir prato"}
              onClick={handleRemove}
            />
            <Button
              id={"saveButton"}
              title={"Salvar Alterações"}
              onClick={handleEditDish}
            />
          </div>
        </div>
      )}
      <Footer />
    </Container>
  );
}
