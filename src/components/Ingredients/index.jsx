import { Container } from "./styles";
import { ReactSVG } from 'react-svg';

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
                {isNew ? <ReactSVG src={plus}/> : <ReactSVG src={close}/>}
            </button>
        </Container>
    )
}