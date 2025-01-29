import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavorites } from '../services/favorite';
import livroImg from '../assets/images/livro2.png';
import { deleteFavorite } from '../services/favorite';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    try {
      const favoritesAPI = await getFavorites();
      setFavorites(favoritesAPI);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  const deleteFavoriteFunc = async (id) => {
    try {
      await deleteFavorite(id);
      fetchFavorites();
      alert('Livro removido dos favoritos!');
    } catch (error) {
      console.error('Erro ao deletar livro:', error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <AppContainer>
      <div>
        <Title>Aqui estão seus livros favoritos:</Title>
        <ResultContainer>
          {favorites.length !== 0
            ? favorites.map((favorite) => (
                <Result
                  onClick={() => deleteFavoriteFunc(favorite.id)}
                  key={favorite.id}
                >
                  <p>{favorite.name}</p>
                  <img src={livroImg} alt={favorite.name} />
                </Result>
              ))
            : null}
        </ResultContainer>
      </div>
    </AppContainer>
  );
}

export default Favorites;
