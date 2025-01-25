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
  const options = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

  return (
    <OptionsContainer>
      {options.map((item) => (
        <Option key={item}>
          <p>{item}</p>
        </Option>
      ))}
    </OptionsContainer>
  );
}
