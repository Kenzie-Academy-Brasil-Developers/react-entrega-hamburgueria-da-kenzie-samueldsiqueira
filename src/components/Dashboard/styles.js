import styled, { css } from "styled-components"

// renderiza se tela for maior que 1200px

export const Container = styled.div`

  display: flex;
  flex-direction: column;


  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

// renderiza se tela for maior que 1200px 
export const LeftSide = styled.div`

  margin-bottom: 30px;

  @media (min-width: 1200px) {
    width: 25%;
    margin-right: 30px;
  }
`





