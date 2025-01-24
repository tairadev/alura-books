import './styles.scss';

export default function HeaderOptions() {
  const options = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

  return (
    <ul className="options">
      {options.map((item) => (
        <li key={item} className="option">
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}
