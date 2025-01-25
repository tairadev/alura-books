import Title from '../Title';
import { books } from './releasesInfos';
import styled from 'styled-components';

const LastReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UltimosLancamentos() {
  return (
    <LastReleasesContainer>
      <Title color="#eb9b00" fontSize="36px" align="center">
        ULTIMOS LANCAMENTOS
      </Title>
      <NewBooksContainer>
        {books.map((book) => (
          <img src={book.src} alt={book.name} />
        ))}
      </NewBooksContainer>
    </LastReleasesContainer>
  );
}

export default UltimosLancamentos;
