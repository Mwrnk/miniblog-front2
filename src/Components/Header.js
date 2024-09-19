import React from "react";
import styled from "styled-components";

const Cabecalho = styled.h1`
    text-align: center;
    display: block;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
`

export class Header extends React.Component {
  render() {
    return (
      <>
        <Cabecalho>Header</Cabecalho>
      </>   
    );
  }
}
