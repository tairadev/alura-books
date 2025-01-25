import { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import { books } from './searchInfos';

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
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

export default function Search() {
  const [foundBooks, setFoundBooks] = useState([]);

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
              book.nome.toLowerCase().includes(value.toLowerCase())
            );
            setFoundBooks(filteredBooks);
          } else {
            setFoundBooks([]);
          }
        }}
      />
      <pre>{JSON.stringify(foundBooks)}</pre>
    </SearchContainer>
  );
}
