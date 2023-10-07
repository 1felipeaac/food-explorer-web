import { Container, InputSearch } from "./styles";
import iconSearch from '../../assets/search.svg'

export function Search() {
  return (
    <Container>
      <img src={iconSearch} alt="icone de pesquisa" />
      <InputSearch type="search" placeholder=" Buscar por pratos ou ingredientes" />
    </Container>
  );
}
