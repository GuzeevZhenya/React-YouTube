import React, { useState} from 'react';
import {useDispatch } from 'react-redux';
import logo from '../../img/sibdev-logo.svg';
import passwordEye from '../../img/eye-off.svg';
import passwordVisible from '../../img/eye.svg';

import './Registration.css';
import { NavLink } from 'react-router-dom';

export const Registration = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isVisiblePassword, setIsVisiblePassword ] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch({ type: 'CHECK_USERDATE', value: { email, password } });
  };

  const setVisiblePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  return (
    <form action="" className="box" method="post">
      <div className='box-container'>
      <img src={logo} alt='Логотип'/>
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
          type={isVisiblePassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="password__btn" onClick={() => setVisiblePassword()}>
          {isVisiblePassword ? (
            <img className="password__btn-img" src={passwordVisible} alt={passwordVisible}/>
          ) : (
            <img className="password__btn-img" src={passwordEye} alt={passwordVisible} />
          )}
        </div>
      </div>
      <NavLink to={`/Main`} className="box__button" type="submit" onClick={handleSubmit}>
        Вход
      </NavLink>
      </div>
      
    </form>
  );
};
