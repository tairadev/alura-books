import RecommendCard from '../RecommendCard';
import Title from '../Title';
import { books } from './releasesInfos';
import styled from 'styled-components';
import bookImage from '../../assets/images/livro2.png';

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
        ÚLTIMOS LANCAMENTOS
      </Title>
      <NewBooksContainer>
        {books.map((book) => (
          <img src={book.src} alt={book.name} />
        ))}
      </NewBooksContainer>
      <RecommendCard
        title="Talvez você se interesse por"
        subtitle="Angular 11"
        description="Construindo uma aplicação com a plataforma Google"
        image={bookImage}
      />
    </LastReleasesContainer>
  );
}

export default UltimosLancamentos;
