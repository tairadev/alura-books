import logo from '../../assets/images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} className="logo-img" alt="Alura Books" />
      <p>
        <strong>Alura</strong> Books
      </p>
    </LogoContainer>
  );
}
