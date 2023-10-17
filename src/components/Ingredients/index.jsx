import { Container } from "./styles";

import plus from "../../assets/plus.svg"
import close from "../../assets/close.svg"

export function Ingredients({isNew, value, onClick, ...rest}){

    return(
        <Container isNew = {isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest} 
            />
            <button
                type="button"
                onClick={onClick}
                className= {isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <img src={plus} alt="icon plus" /> : <img src={close} alt="icon close" />}
            </button>
        </Container>
    )
}