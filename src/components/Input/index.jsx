/* eslint-disable react/prop-types */
import {Container} from './styles.js'

export function Input({title, placeholder, id, type, onChange, ...rest}){

    return(
        <Container>
            <label htmlFor={id}>{title}</label>
            <input onChange={onChange} type={type} name={id} id={id} placeholder={placeholder} {...rest}/>
        </Container>
    )
}