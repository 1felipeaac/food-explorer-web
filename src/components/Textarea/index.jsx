import { Container } from "./styles";

export function Textarea({placeholder, onChange}){

    return(
        <Container>
            <label htmlFor="description">Descrição</label>
            <textarea onChange={onChange} placeholder={placeholder} name="description" id="description" cols="30" rows="10"></textarea>
        </Container>
    )
}