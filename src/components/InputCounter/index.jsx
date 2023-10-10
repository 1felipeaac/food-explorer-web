import { Container } from "./styles";

export function InputCounter(){

    const minun = document.querySelector("#minun")
    const plus = document.querySelector("#plus")
    const count = document.querySelectorAll(".count")

    function increment(){
        count.value = parseInt(count.value) + 1
    }

    function decrement(){
        if(parseInt(count.value) > 0){
            count.value = parseInt(count.value) - 1
        }
    }

    return(
        <Container>
            <button id="minun" onClick={decrement}>-</button>
            <input className="count" type="text" value="0"/>
            <button id="plus" onClick={increment}>+</button>
        </Container>
    )
}