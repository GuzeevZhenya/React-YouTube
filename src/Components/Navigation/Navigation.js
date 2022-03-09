import React from "react";
import logoMini from "../../img/sibdev-logo-mini.svg";
import "./Navigation.css";
import { Route, NavLink } from "react-router-dom";

export const Navigation = () => {
  const navLink = [
    {
      name: "Поиск",
      link: "Main",
    },
    {
      name: "Избранное",
      link: "Favourite",
    },
  ];

  const navigationItem = navLink.map((item) => (
    <NavLink key={item.link}
      activeClassName="navigation__active"
      to={`/${item.link}`}
      className="navigation__item"
    >
      {item.name}
    </NavLink>
  ));
  return (
    <div className="navigation">
      <NavLink to={`/Main`} className="navigation__logo">
        <img src={logoMini} />
      </NavLink>
      <nav>
        <div className="navigation__menu">
          <ul className="navigation__items">{navigationItem}</ul>
        </div>
      </nav>
      <div>
        <NavLink to={`/Registration`} className="navigation__item">
          Выйти
        </NavLink>
      </div>
    </div>
  );
};
