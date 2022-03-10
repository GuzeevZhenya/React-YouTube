import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import { videoApi } from '../../api';
import './Form.css';

export const Form = ({ setShowForm }) => {
  const [ sortingType, setSortingType ] = useState('date');
  const [ formName, setFormName ] = useState('');
  const [ rangeValue, setRangeValue ] = useState(4);
  const [ request, setRequest ] = useState();

  const [ nameIsValid, setNameIsValid ] = useState(false);

  const dispatch = useDispatch();
  const searchReducer = useSelector((state) => state.videoReducer);

  // useEffect(() => {
  //   if (formName === null || formName === '' || formName === undefined) {
  //     setNameIsValid(false);
  //     console.log(nameIsValid)
  //   }else{

  //     setNameIsValid(true);
  //     console.log(nameIsValid)
  //   }

  // }, [formName]);

  const setFormDate = (e) => {
    e.preventDefault();
    const randomId = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    // setRequest(searchReducer.searchFilm);
    dispatch({
      type: 'SET_DATA',
      value: { sortingType, request: searchReducer.searchFilm, formName, rangeValue, id: randomId },
    });
    setShowForm(false);
  };

  const closeForm = (e) => {
    setShowForm(false);
  };

  return (
    <div>
      <form className="main__form">
        <h2 className="main__form-title">Сохранить запрос</h2>
        <div>
          <label>
            <span>Запрос</span>
            <input
              className="input-disabled"
              disabled
              value={searchReducer.searchFilm}
              placeholder="чем кормить кота"
            />
          </label>
          <label>
            <span>*Название</span>
            <span className="form-validation">
              {formName.length < 3 ? 'Название должно иметь больше 2х символов' : null}
            </span>
            <input
              placeholder="Укажите название"
              onChange={(e) => setFormName(e.target.value)}
              className={formName.length <= 3 ? 'error' : null}
            />
          </label>
          <label>
            {/* <span>Сортировать по</span>
              <input placeholder="Без сортировки" /> */}
            <select
              value={sortingType}
              onChange={(e) => setSortingType(e.target.value)}
              className="form-sorting"
              name="form-sorting">
              <option value="date">Дате</option>
              <option value="raiting">Рейтенгу</option>
              <option value="rolevant">Ролевантности</option>
              <option value="name">Названию</option>
              <option value="views">Количеству просмотров</option>
            </select>
          </label>

          <label className="form-range">
            <input
              onChange={(e) => setRangeValue(e.target.value)}
              value={rangeValue}
              type="range"
              min="4"
              max="50"
            />
            <span>{rangeValue}</span>
          </label>
        </div>

        <div className="form-buttons">
          <button onClick={() => closeForm()} className="form-button button-dns">
            Не Сохранять
          </button>
          <button
            onClick={(e) => setFormDate(e)}
            className="form-button button-save"
            disabled={formName.length < 3 ? true : false}>
            Сохранять
          </button>
        </div>
      </form>
    </div>
  );
};

export const FavouriteForm = ({ formInfo, setShowForm }) => {
  const searchReducer = useSelector((state) => state.videoReducer);
  const dispatch = useDispatch();

  const closeForm = (e) => {
    setShowForm(false);
  };
  const getRequest = () => {
    videoApi
      .getVideo(formInfo[0].request, formInfo[0].rangeValue)
      .then((data) => dispatch({ type: 'ADD_VIDEO', value: data }));
  };
  return (
    <div className="favouriteForm">
      <div className="favouriteForm__info">
        <span>Название: «{formInfo[0].formName}»</span>
        <span>Запрос: «{formInfo[0].request}»</span>
        <span>Сортировка: «{formInfo[0].sortingType}»</span>
        <span>Max количество видео: «{formInfo[0].rangeValue}»</span>
      </div>
      <div className="form-buttons">
        <button onClick={() => closeForm()} className="form-button button-dns">
          Не Сохранять
        </button>
        <NavLink to={`/Main`} onClick={(e) => getRequest(e)} className="form-button button-save">
          Выполнить
        </NavLink>
      </div>
    </div>
  );
};
