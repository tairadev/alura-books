import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import { getBooks } from '../../services/book';
import { addFavorite } from '../../services/favorite';

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  width: 100%;
  overflow: hidden;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
  padding: 5px;
  border-radius: 4px;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

export default function Search() {
  const [foundBooks, setFoundBooks] = useState([]);
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const booksAPI = await getBooks();
      setBooks(booksAPI);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  async function insertFavorite(id) {
    try {
      await addFavorite(id);
      alert(`Livro de id ${id} adicionado aos favoritos!`);
    } catch (error) {
      console.error('Erro ao adicionar favorito:', error);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro na nossa estante.</Subtitle>
      <Input
        placeholder="Escreva sua próxima leitura..."
        onBlur={(e) => {
          const { value } = e.target;
          if (value) {
            const filteredBooks = books.filter((book) =>
              book.name.toLowerCase().includes(value.toLowerCase())
            );
            setFoundBooks(filteredBooks);
          } else {
            setFoundBooks([]);
          }
        }}
      />
      {foundBooks.map((book) => (
        <Result key={book.id} onClick={() => insertFavorite(book.id)}>
          <p>{book.name}</p>
          <img src={book.image} alt={book.name} />
        </Result>
      ))}
    </SearchContainer>
  );
}
