import React from "react";
import styled from "styled-components";

const Cabecalho = styled.h1`
    text-align: center;
    display: block;
`
const Banner = styled.img`
    width: 100%;
    height: 200px;
    background-color: rgb(240, 240, 240);
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: rgb(85, 85, 85);
    border-radius: 8px;
`
export class Header extends React.Component {
  render() {
    return (
      <>
        <Cabecalho>MINIBLOG</Cabecalho>
        <Banner src="https://picsum.photos/500/200" alt="banner"></Banner>
      </>   
    );
  }
}
