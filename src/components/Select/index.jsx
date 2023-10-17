import { Container } from "./styles";

export function Select(){
    return(
        <Container>
            <label htmlFor="category">Cetegoria</label>
            <select name="category" id="category" defaultValue="Refições">
                <option value="Refições">Refições</option>
                <option value="Pratos Principais">Pratos Principais</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Sobremesas">Sobremesas</option>
            </select>
        </Container>
    )
}