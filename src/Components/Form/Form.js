import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import { videoApi } from '../../api';
import './Form.css';

export const Form = ({ setShowForm,formInfo,changeValue }) => {
  const [ sortingType, setSortingType ] = useState(formInfo === undefined ? 'date' : formInfo[0].sortingType);
  const [ formName, setFormName ] = useState(formInfo === undefined ? '' : formInfo[0].formName);
  const [rangeValue, setRangeValue] = useState(4);
  const [id, setId] = useState(formInfo === undefined ? '' : formInfo[0].id );
  
  
  // const [ request, setRequest ] = useState();

  // const [ nameIsValid, setNameIsValid ] = useState(false);

  const dispatch = useDispatch();
  const searchReducer = useSelector((state) => state.videoReducer);

  const [request, setReques] = useState(formInfo === undefined ? searchReducer.searchFilm : formInfo[0].request);

  console.log(request)
  

  const setFormDate = (e) => {
    e.preventDefault();
    const randomId = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    setId(randomId)
    if (changeValue) {
      dispatch({type:'CHANGE_VALUE',value: { sortingType, request: request, formName, rangeValue, id }})
    } else {
      dispatch({
        type: 'SET_DATA',
        value: { sortingType, request: searchReducer.searchFilm, formName, rangeValue, id: randomId }
      });
    }
  
  
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
              disabled={changeValue ? false : true}
              value={changeValue ? request : searchReducer.searchFilm}
              placeholder="чем кормить кота"
              onChange={(e)=>setReques(e.target.value)}
            />
          </label>
          <label>
            <span>*Название</span>
            <span className="form-validation">
              {formName && formName.length < 3 ? 'Название должно иметь больше 2х символов' : null}
            
            </span>
            <input
              placeholder="Укажите название"
              onChange={(e) => setFormName(e.target.value)}
              className={formName && formName.length < 3 ? 'error' : null}
              value={formName}
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
            disabled={formName && formName.length < 3 ? true : false}>
            Сохранять
          </button>
        </div>
      </form>
    </div>
  );
};

export const FavouriteForm = ({ formInfo, setShowFavouriteForm }) => {
  const searchReducer = useSelector((state) => state.videoReducer);
  const dispatch = useDispatch();

  const closeForm = (e) => {
    setShowFavouriteForm(false);
  };

  const favouriteRequest = formInfo && formInfo.map(item => (
    <div className="favouriteForm__info" key={item.id} >
      <span>Название: «{item.formName}»</span>
      <span>Запрос: «{item.request}»</span>
      <span>Сортировка: «{item.sortingType}»</span>
      <span>Max количество видео: «{item.rangeValue}»</span>
    </div>  
  ))
 

  const getRequest = () => {
    dispatch({type:'SEARCH_VIDEO',value:formInfo[0].request})
    videoApi
      .getVideo(formInfo[0].request, formInfo[0].rangeValue)
      .then((data) => dispatch({ type: 'ADD_VIDEO', value: data }));
  };
  return (
    <div className="favouriteForm">
        {favouriteRequest}
      <div className="form-buttons">
        <button onClick={() => closeForm()} className="form-button button-dns">
          Не выполнять
        </button>
        <NavLink to={`/Main`} onClick={(e) => getRequest(e)} className="form-button button-save">
          Выполнить
        </NavLink>
      </div>
    </div>
  );
};

