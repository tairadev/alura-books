import './App.scss';
import Logo from './components/Logo';
import profile from './assets/images/perfil.svg';
import basket from './assets/images/sacola.svg';

function App() {
  const options = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
  const icons = [profile, basket];

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <ul className="options">
          {options.map((item) => (
            <li key={item} className="option">
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <ul className="icons">
          {icons.map((icon, i) => (
            <li className="icon">
              <img src={icon} alt="Ícone" />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
