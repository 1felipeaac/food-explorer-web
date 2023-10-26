import styled from 'styled-components'

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;

main{
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    a {
        line-height: 0;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        section{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
    }

}

/* background-color: red; */

`
