import React from 'react';
import logoMini from '../../img/sibdev-logo-mini.svg';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const dispatch = useDispatch();
  const registrationReducer = useSelector((state) => state.registationReducer);

  const navLink = [
    {
      name: 'Поиск',
      link: 'Main',
    },
    {
      name: 'Избранное',
      link: 'Favourite',
    },
  ];

  const navigationItem = navLink.map((item) => (
    <NavLink
      key={item.link}
      activeClassName="navigation__active"
      to={`/${item.link}`}
      className="navigation__item">
      {item.name}
    </NavLink>
  ));

  const exitFromPages = () => {
    dispatch({ type: 'EXIT', action: false });
  };

  
  return (
    <div className="navigation">
      <div className="container">
        <NavLink to={`/Main`} className="navigation__logo">
          <img src={logoMini} alt="Логотип" />
        </NavLink>
        <nav>
          <div className="navigation__menu">
            <ul className="navigation__items">{navigationItem}</ul>
          </div>
        </nav>
        <div>
          <NavLink
            to={`/Registration`}
            onClick={() => exitFromPages()}
            className="navigation__item">
            Выйти
          </NavLink>
        </div>
      </div>
    </div>
  );
};
