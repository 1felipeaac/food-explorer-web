import { useState } from "react";
import { Container } from "./styles";

export function Select({onChange, ...rest}){
    const [selectedOption, setSelectedOption] = useState("")

    function handleOnChange(e){
        setSelectedOption(e.target.value)
    }

    return(
        <Container>
            <label htmlFor="category">Categoria</label>
            <select value={selectedOption} onChange={handleOnChange} name="category" id="category" defaultValue="Refições" {...rest}>
                <option value="Refições">Refições</option>
                <option value="Pratos Principais">Pratos Principais</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Sobremesas">Sobremesas</option>
            </select>
        </Container>
    )
}