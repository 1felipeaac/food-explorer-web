/* eslint-disable react/prop-types */
import { Container } from "./styles";
// import polygon from "../../assets/polygon.svg";

export function Logo({role}){
    let polygon = <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
    </svg>  
    return(
        <Container>
            <span>
                {polygon}
                <h1>food explorer</h1>
            </span>
            <p>{role}</p>
        </Container>
    )
}