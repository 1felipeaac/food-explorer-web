import { Container, InputSearch } from "./styles";
import iconSearch from "../../assets/search.svg";
import { useState } from "react";
export function Search({ onSearch }) {
  const [value, setValue] = useState("");

  const inputSearch = document.getElementById("inputSearch");

  console.dir(inputSearch);

  let timer = null;

  function handleSearchChange(e) {
    const searchValue = e.target.value;
    setValue(searchValue);
    onSearch(searchValue);

    // inputSearch.addEventListener("input", function () {
    //   clearTimeout(timer);
    //   timer = setTimeout(function () {
    //   }, 500);
    // });
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
