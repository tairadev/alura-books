import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OptionsContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const Option = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

export default function HeaderOptions() {
  const options = ['CATEGORIAS', 'ESTANTE', 'FAVORITOS'];

  return (
    <OptionsContainer>
      {options.map((item) => (
        <Option key={item}>
          <Link to={`/${item.toLowerCase()}`}>
            <p>{item}</p>
          </Link>
        </Option>
      ))}
    </OptionsContainer>
  );
}
