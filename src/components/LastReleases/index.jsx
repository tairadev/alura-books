import { books } from './releasesInfos';
import styled from 'styled-components';

const LastReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
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
      <Title>ULTIMOS LANCAMENTOS</Title>
      <NewBooksContainer>
        {books.map((book) => (
          <img src={book.src} alt={book.name} />
        ))}
      </NewBooksContainer>
    </LastReleasesContainer>
  );
}

export default UltimosLancamentos;
