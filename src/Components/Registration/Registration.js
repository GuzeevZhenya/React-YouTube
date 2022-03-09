import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../img/sibdev-logo.svg";
import passwordEye from "../../img/eye-off.svg";
import passwordVisible from "../../img/eye.svg";

import "./Registration.css";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.registationReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CHECK_USERDATA", value: { email, password } });
  };

  const setVisiblePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  return (
    <form action="" className="box" method="post">
      <img src={logo} />
      <h1>Вход</h1>
      <div className="input__container">
        <label htmlFor="email">Email</label>
        <input
          className="box__input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input__container">
        <label htmlFor="password">Password</label>
        <input
          className="box__input"
          type={isVisiblePassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="password__btn" onClick={() => setVisiblePassword()}>
          {isVisiblePassword ? (
            <img className="password__btn-img" src={passwordVisible} />
          ) : (
            <img className="password__btn-img" src={passwordEye} />
          )}
        </div>
      </div>
      <button className="box__button" type="submit" onClick={handleSubmit}>
        Вход
      </button>
    </form>
  );
};
