/* eslint-disable react/prop-types */
import {Container} from './styles.js'

export function Input({title, placeholder, id, type, ...rest}){

    return(
        <Container {...rest}>
            <label htmlFor={id}>{title}</label>
            <input type={type} name={id} id={id} placeholder={placeholder} />
        </Container>
    )
}