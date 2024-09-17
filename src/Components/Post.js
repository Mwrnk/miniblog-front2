
import styled from "styled-components";
import React, { useState } from "react";

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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
   background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  overflow-y: auto;
  white-space: nowrap;
`;

const ModalText = styled.p`
  margin: 0;
  min-width: 100%; /* Garante que o texto ocupe pelo menos a largura do modal */
`;

const CloseButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #d32f2f;
  }
`;

const PostText = styled.p`
  max-height: 60px; /* Define uma altura máxima para o texto */
  overflow: hidden; /* Esconde o texto que ultrapassa o max-height */
  text-overflow: ellipsis; /* Adiciona reticências (...) no final do texto */
  margin: 0;
`;

const Postagem = ({ titulo, conteudo, link, id, removerPostagem }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <PostCard>
        <PostImage src={link} alt={titulo} />
        <PostContent>
          <H2>{titulo}</H2>
          <PostText>{conteudo.substring(0, 100)}...</PostText>
          <Button onClick={handleOpenModal}>Ler mais</Button>
          <Button onClick={() => removerPostagem(id)}>Remover</Button>
        </PostContent>
      </PostCard>

      {modalOpen && (
        <Modal>
          <ModalContent>
            <h2>{titulo}</h2>
            <ModalText>{conteudo}</ModalText>
            <CloseButton onClick={handleCloseModal}>Fechar</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </>
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
