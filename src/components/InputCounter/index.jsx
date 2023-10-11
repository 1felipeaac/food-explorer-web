/* eslint-disable no-const-assign */
import { useState } from "react";
import { Container } from "./styles";
import minun from "../../assets/minun.svg"
import plus from "../../assets/plus.svg"

export function InputCounter(){

    const [count, setCount] = useState(0)


    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        if(count > 0){
            setCount(count - 1)
        }
    }

    return(
        <Container>
            <button id="minun" onClick={decrement}><img src={minun} alt="icon minun" /></button>
            <div className="counter">{count}</div>
            <button id="plus" onClick={increment}><img src={plus} alt="icon plus" /></button>
        </Container>
    )
}