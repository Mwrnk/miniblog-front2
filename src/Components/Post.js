import styled from "styled-components";
import React, { useState } from "react";

const Button = styled.button`
  background-color: #1ab85e;
  color: white;
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0.75em;

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
  height: 400px; /* Define uma altura fixa para o modal */
  overflow-y: auto; /* Permite rolagem interna se o conteúdo ultrapassar a altura */
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
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
  padding: 4px 8px;
  cursor: pointer;
  font-size: 12px;
  margin: 0.75rem;
  &:hover {
    background-color: #d32f2f;
  }
`;

const PostText = styled.p`
  max-height: 60px;
  ${"" /* Define uma altura máxima para o texto */}
  overflow: hidden;
  ${"" /* Esconde o texto que ultrapassa o max-height */}
  margin: 0;
`;

const Postagem = ({ titulo, conteudo, link, id, removerPostagem }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const isLongText = conteudo.length > 30; // Verifica se o conteudo do campo texto tem mais de 30 caracteres
  const truncatedText = isLongText
    ? conteudo.substring(0, 30) + "..."
    : conteudo; // Aplica reticências só se necessário

  return (
    <>
      <PostCard>
        <PostImage src={link} alt={titulo} />
        <PostContent>
          <H2>{titulo}</H2>
          <PostText>{truncatedText}</PostText>{" "}
          {/* Exibe texto com reticências se o texto for longo*/}
          {/* Mesma coisa com o botão "Ler mais"  */}
          {isLongText && <Button onClick={handleOpenModal}>Ler mais</Button>}
          <CloseButton onClick={() => removerPostagem(id)}>Remover</CloseButton>
        </PostContent>
      </PostCard>

      {/* Modal só aparece se modalOpen estiver true */}
      {modalOpen && (
        <Modal>
          <ModalContent>
            <h2>{titulo}</h2>
            <ModalText>{conteudo}</ModalText>{" "}
            {/* Mostra o conteúdo completo no modal */}
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