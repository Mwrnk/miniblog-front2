import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  background-color: #f9f9f9;
`;

const Postagem = ({ titulo, conteudo, link, id, removerPostagem }) => {
  return (
    <Card>
      <h3>{titulo}</h3>
      <p>{conteudo}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
      <button onClick={() => removerPostagem(id)}>Remover</button>
    </Card>
  );
};

const ListaDePostagens = ({ postagens, removerPostagem }) => {
  return (
    <div>
      {postagens.map((post) => (
        <Postagem
          key={post.id}
          titulo={post.titulo}
          conteudo={post.conteudo}
          link={post.link}
          id={post.id}
          removerPostagem={removerPostagem}
        />
      ))}
    </div>
  );
};

export default ListaDePostagens;
