import {Container} from './styles.js'

export function Input({name, placeholder}){

    return(
        <Container>
            <label htmlFor={`${name}Form`}>{name}</label>
            <input type="text" name={`${name}Form`} id={`${name}Form`}  placeholder={placeholder} />
        </Container>
    )
}