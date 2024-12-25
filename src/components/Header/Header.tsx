import { NavLink } from 'react-router-dom';
import './Header.scss';

const BASE_URL = import.meta.env.BASE_URL;

const menu = [
  {
    href: BASE_URL + '/',
    name: 'Главная',
  },
  {
    href: BASE_URL + 'about',
    name: 'О нас',
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <nav className="menu">
            <ul className="menu__list">
              {menu.map(item => (
                <li className="menu__item" key={item.href}>
                  <NavLink to={item.href}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
