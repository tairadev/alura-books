import './styles.scss';
import logo from '../../assets/images/logo.svg';

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} className="logo-img" alt="Alura Books" />
      <p>
        <strong>Alura</strong> Books
      </p>
    </div>
  );
}
