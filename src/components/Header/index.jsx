import Logo from '../../components/Logo';
import HeaderIcons from '../HeaderIcons';
import HeaderOptions from '../HeaderOptions';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  );
}
