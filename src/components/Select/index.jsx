import { Container } from "./styles";

export function Select({onChange, ...rest}){
    return(
        <Container>
            <label htmlFor="category">Cetegoria</label>
            <select onChange={onChange} name="category" id="category" defaultValue="Refições" {...rest}>
                <option value="Refições">Refições</option>
                <option value="Pratos Principais">Pratos Principais</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Sobremesas">Sobremesas</option>
            </select>
        </Container>
    )
}