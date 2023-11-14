/* eslint-disable react/prop-types */
import { Container, InputSearch } from "./styles";
import iconSearch from "../../assets/search.svg";
export function Search({ onSearch }) {
  
  return (
    <Container>
      <img src={iconSearch} alt="icone de pesquisa" />
      <InputSearch
        className="inputSearch"
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        placeholder=" Buscar por pratos ou ingredientes"
      />
    </Container>
  );
}
