import './styles.scss';

import Logo from '../../components/Logo';
import HeaderIcons from '../HeaderIcons';
import HeaderOptions from '../HeaderOptions';

export default function Header() {
  return (
    <header className="App-header">
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </header>
  );
}
