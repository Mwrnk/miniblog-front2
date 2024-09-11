import React from "react";
import styled from "styled-components";

const Formu = styled.form`
  display: flex;
  unicode-bidi: isolate;
  flex-direction: column;
`;
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
    const postCopiado = [...this.state.professores];
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
            <input
              type="text"
              placeholder="Titulo da Postagem"
              onChange={this.onChangeTitulo}
              value={this.state.titulo}
            ></input>
            <textarea
              type="text"
              placeholder="Conteudo"
              onChange={this.onChangeConteudo}
              value={this.state.conteudo}
            ></textarea>
            <input
              type="text"
              placeholder="Link"
              onChange={this.onChangeLink}
              value={this.state.link}
            ></input>
          </Formu>
        </section>
        <div>
          <button onClick={this.adicionarPostagem}>Adicionar</button>
        </div>
      </>
    );
  }
}
