import React from "react";
import styled from "styled-components";

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
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const PostCard = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostImage = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const PostContent = styled.div`
  width: 60%;
  padding: 10px;
`;

const PostItem = styled.div`
  margin-bottom: 10px;
`;

const Postagem = ({ titulo, conteudo, link, id, removerPostagem }) => {
  return (
    <PostCard>
      <PostImage src={link} alt={titulo} />
      <PostContent>
        <H2>{titulo}</H2>
        <p>{conteudo}</p>
        <Button onClick={() => removerPostagem(id)}>Remover</Button>
      </PostContent>
    </PostCard>
  );
};

const ListaDePostagens = ({ postagens, removerPostagem }) => {
  // Inverter a lista, para que o último post a ser adicionado apareça no topo da página.
  const postRevertidas = [...postagens].reverse();

  return (
    <div>
      {postRevertidas.map((post) => (
        <PostItem key={post.id}>
          <Postagem
            titulo={post.titulo}
            conteudo={post.conteudo}
            link={post.link}
            id={post.id}
            removerPostagem={removerPostagem}
          />
        </PostItem>
      ))}
    </div>
  );
};

export default ListaDePostagens;
