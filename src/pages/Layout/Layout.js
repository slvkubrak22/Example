import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">Главная</Link>
          </li>
          <li className="nav__item">
            <Link to="/route_list" className="nav__link">Маршрутный лист</Link>
          </li>
          <li className="nav__item">
            <Link to="/addresses" className="nav__link">Адреса</Link>
          </li>
          <li className="nav__item">
            <Link to="/storage" className="nav__link">Склад</Link>
          </li>
          <li className="nav__item">
            <Link to="/drivers" className="nav__link">Водители</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;