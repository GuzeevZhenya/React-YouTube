import React, { useState } from 'react';

import { videoApi } from '../../api';
import { Form } from '../Form/Form';
import './Main.css';
import { useSelector, useDispatch } from 'react-redux';
import { Video } from '../Video/Video';

export const Main = () => {
  const dispatch = useDispatch();
  const searchReducer = useSelector((state) => state.videoReducer);

  const [ cardPosition, setCardPosition ] = useState('row');
  const [ showForm, setShowForm ] = useState(false);
  const [ searchFilm, setSearchFilm ] = useState(null);

  const getVideo = () => {
    setSearchFilm('');
    dispatch({ type: 'SEARCH_VIDEO', value: searchFilm });
    videoApi.getVideo(searchFilm).then((data) => dispatch({ type: 'ADD_VIDEO', value: data }));
  };

  const findFilm = (value) => {
    setSearchFilm(value);
  };

  const findFilmByEnter = (e) => {
    if (e.keyCode === 13) {
      getVideo();
    }
  };

  const cardsPosition = (name) => {
    setCardPosition(name);
  };

  const clickForm = () => {
    setShowForm(!showForm);
  };

  // const closeForm = () => {
  //   setShowForm(false);
  // };

  return (
    <div>
      {showForm ? <Form setShowForm={setShowForm} /> : null}
      <div className="main">
        <div className="container">
          <h1 className="main__title">Поиск видео</h1>
          <div className="main__search">
            <input
              value={searchFilm}
              onChange={(e) => findFilm(e.target.value)}
              className="main__search-input"
              placeholder="Что хотите посмотреть?"
              onKeyDown={(e) => findFilmByEnter(e)}
            />
            {searchReducer.searchFilm !== '' ? (
              <span onClick={clickForm} className="main__search-input--heart" />
            ) : null}

            <button
              disabled={searchFilm ? false : true}
              onClick={() => getVideo()}
              className="main__search-button">
              Найти
            </button>
          </div>
          {searchReducer.searchFilm ? (
            <div className="main__panel">
              <div>
                <p className="main__panel-title">
                  Видео по запросу:{' '}
                  <span>&#8249;&#8249;{searchReducer.searchFilm}&#8250;&#8250;</span>
                </p>
              </div>
              <div>
                <button
                  onClick={(e) => cardsPosition(e.target.name)}
                  name="column"
                  className={
                    cardPosition === 'column' ? (
                      `main__panel-button--column main__panel-button--column--active`
                    ) : (
                      `main__panel-button--column`
                    )
                  }
                />
                <button
                  onClick={(e) => cardsPosition(e.target.name)}
                  name="row"
                  className={
                    cardPosition === 'row' ? (
                      `main__panel-button--row main__panel-button--row--active`
                    ) : (
                      'main__panel-button--row'
                    )
                  }
                />
              </div>
            </div>
          ) : null}

          <Video position={cardPosition} />
        </div>
      </div>
    </div>
  );
};
