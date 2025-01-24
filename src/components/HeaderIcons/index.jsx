import './styles.scss';

import profile from '../../assets/images/perfil.svg';
import basket from '../../assets/images/sacola.svg';

export default function HeaderIcons() {
  const icons = [profile, basket];

  return (
    <ul className="icons">
      {icons.map((icon, i) => (
        <li className="icon">
          <img src={icon} alt="Ícone" />
        </li>
      ))}
    </ul>
  );
}
