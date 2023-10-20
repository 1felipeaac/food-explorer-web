import { Container, InputSearch } from "./styles";
import iconSearch from "../../assets/search.svg";
import { useState } from "react";

export function Search({ onSearch }) {
  const [value, setValue] = useState("");

  function handleSearchChange(e) {
    const searchValue = e.target.value;
    setValue(searchValue);
    onSearch(searchValue);
  }
  return (
    <Container>
      <img src={iconSearch} alt="icone de pesquisa" />
      <InputSearch
        id="inputSearch"
        value={value}
        onChange={handleSearchChange}
        type="search"
        placeholder=" Buscar por pratos ou ingredientes"
      />
    </Container>
  );
}
