import React from "react";
import styled from "styled-components";
import ListaDePostagens from "./Post";

const Formu = styled.form`
  display: flex;
  unicode-bidi: isolate;
  flex-direction: column;
  
`;
const Input = styled.input`
  padding: 0.875rem;
  font-size: 1rem;
  border: 1.5px solid #000;
  border-radius: 0.5rem;
  box-shadow: 2.5px 3px 0 #000;
  outline: none;
  transition: ease 0.25s;

  &:focus {
  box-shadow: 5.5px 7px 0 black;
  }
`;

const TextArea = styled.textarea`
padding: 0.875rem;
  font-size: 1rem;
  border: 1.5px solid #000;
  border-radius: 0.5rem;
  box-shadow: 2.5px 3px 0 #000;
  outline: none;
  transition: ease 0.25s;

  &:focus {
  box-shadow: 5.5px 7px 0 black;
  }
`
const Button = styled.button`
  background-color: #1ab85e;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #18994f;
  }
`

export class Inputs extends React.Component {
  state = {
    postagens: [],
    id: "",
    titulo: "",
    conteudo: "",
    link: "",
  };

  onChangeTitulo = (event) => {
    this.setState({ titulo: event.target.value });
  };

  onChangeConteudo = (event) => {
    this.setState({ conteudo: event.target.value });
  };

  onChangeLink = (event) => {
    this.setState({ link: event.target.value });
  };

  componentDidMount() {
    // Adiciona um listener global para capturar o "Enter"
    window.addEventListener('keydown', this.handleGlobalKeyDown);
  }

  componentWillUnmount() {
    // Remove o listener global ao desmontar o componente
    window.removeEventListener('keydown', this.handleGlobalKeyDown);
  }

  // Listener global para capturar "Enter" fora dos inputs
  handleGlobalKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.adicionarPostagem(event);
    }
  }

  adicionarPostagem = (event) => {
    let titulo = this.state.titulo;
    let conteudo = this.state.conteudo;
    let link = this.state.link;
    let id = Math.random();

    let postagens = [
      ...this.state.postagens,
      { titulo: titulo, conteudo: conteudo, link: link, id: id },
    ];

    this.setState({ postagens: postagens });

    this.setState({
      titulo: "",
      conteudo: "",
      link: "",
    });
  
  };
  removerPostagem = (id) => {
    const postCopiado = [...this.state.postagens];
    const posts = postCopiado.filter((posts) => {
      return id !== posts.id;
    });
    this.setState({ postagens: posts });
  };
  
  render() {
    return (
      <>
        <section>
          <Formu>
            <Input
              type="text"
              placeholder="Titulo da Postagem (maximo de 50 caracteres)"
              maxLength={50}
              onChange={this.onChangeTitulo}
              value={this.state.titulo}
            ></Input>
            <TextArea
              type="text"
              placeholder="Conteudo"
              onChange={this.onChangeConteudo}
              value={this.state.conteudo}
            ></TextArea>
            <Input
              type="text"
              placeholder="Link"
              onChange={this.onChangeLink}
              value={this.state.link}
            ></Input>
          </Formu>
        </section>
        <div>
          <Button onClick={this.adicionarPostagem} onKeyDown={this.handleKeyDown} >Adicionar</Button>
        </div>
        <ListaDePostagens
          postagens={this.state.postagens}
          removerPostagem={this.removerPostagem}
        />
      </>
    );
  }
}
