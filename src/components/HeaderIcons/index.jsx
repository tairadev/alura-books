import profile from '../../assets/images/perfil.svg';
import basket from '../../assets/images/sacola.svg';
import styled from 'styled-components';

const IconsContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

export default function HeaderIcons() {
  const icons = [profile, basket];

  return (
    <IconsContainer>
      {icons.map((icon, i) => (
        <Icon>
          <img src={icon} alt="Ícone" />
        </Icon>
      ))}
    </IconsContainer>
  );
}
