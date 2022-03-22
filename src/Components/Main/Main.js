import React, { useState, useEffect } from 'react';

import { videoApi } from '../../api';
import { Form } from '../Form/Form';
import './Main.css';
import { useSelector, useDispatch } from 'react-redux';
import { Video } from '../Video/Video';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

export const Main = () => {
  const dispatch = useDispatch();
  const searchReducer = useSelector((state) => state.videoReducer);

  const [ cardPosition, setCardPosition ] = useState('row');
  const [ showForm, setShowForm ] = useState(false);
  const [ searchFilm, setSearchFilm ] = useState(null);
  const [ movies, setMovies ] = useState(searchReducer.videos.items && searchReducer.videos.items);

  const [ currentPage, setCurrentPage ] = useState(1);
  const [ moviesPerPages ] = useState(12);
  console.log(movies)

  const getVideo = () => {
    setSearchFilm('');
    videoApi.getVideo(searchFilm).then((data) => setMovies(data));
    dispatch({ type: 'SEARCH_VIDEO', value: searchFilm });
    // videoApi.getVideo(searchFilm).then((data) => dispatch({ type: 'ADD_VIDEO', value: data }));
  };

  const lastMoviesIndex = currentPage * moviesPerPages;
  const firstMoviesIndex = lastMoviesIndex - moviesPerPages;
  const currentMovie = movies && movies.items.slice(firstMoviesIndex, lastMoviesIndex);

  // const findFilm = (value) => {
  //   setSearchFilm(value);
  // };

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              onChange={(e) => setSearchFilm(e.target.value)}
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
          {currentMovie ? (
            <div className="main__video">
              <div className="main__panel">
                <div>
                  <p className="main__panel-title">
                    Видео по запросу:{' '}
                    <span>&#8249;&#8249;{searchReducer.searchFilm}&#8250;&#8250;</span>
                    <span>Всего видео: {searchReducer.videos.pageInfo.totalResults}</span>
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
              <div className='main__video-info'>
              <Video movies={currentMovie} position={cardPosition} />
              <Pagination
                moviesPerPages={moviesPerPages}
                totalMovies={
                  searchReducer.videos.pageInfo.totalResults &&
                  searchReducer.videos.pageInfo.totalResults
                }
                paginate={paginate}
              />
              </div>
            </div>
          ) : null}

       
        </div>
      </div>
    </div>
  );
};
