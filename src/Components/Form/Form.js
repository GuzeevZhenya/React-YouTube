import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Form.css";

export const Form = ({ setShowForm }) => {
  const [sortingType, setSortingType] = useState("date");
  const [formName, setFormName] = useState("");
  const [rangeValue, setRangeValue] = useState(4);

  const dispatch = useDispatch();
  const searchReducer = useSelector((state) => state.videoReducer);

  const setFormDate = (e) => {
    e.preventDefault();
    const randomId = `f${(~~(Math.random() * 1e8)).toString(16)}`;

    dispatch({
      type: "SET_DATA",
      value: { sortingType, formName, rangeValue, id: randomId },
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
            <input
              placeholder="Укажите название"
              onChange={(e) => setFormName(e.target.value)}
            />
          </label>
          <label>
            {/* <span>Сортировать по</span>
              <input placeholder="Без сортировки" /> */}
            <select
              value={sortingType}
              onChange={(e) => setSortingType(e.target.value)}
              className="form-sorting"
              name="form-sorting"
            >
              <option value="date">дате</option>
              <option value="raiting">рейтенгу</option>
              <option value="rolevant">ролевантности</option>
              <option value="name">названию</option>
              <option value="views">количеству просмотров</option>
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
          <button
            onClick={() => closeForm()}
            className="form-button button-dns"
          >
            Не Сохранять
          </button>
          <button
            onClick={(e) => setFormDate(e)}
            className="form-button button-save"
          >
            Сохранять
          </button>
        </div>
      </form>
    </div>
  );
};

export const FavouriteForm = ({ formInfo }) => {
  const searchReducer = useSelector((state) => state.videoReducer);
    console.log(formInfo[0])
  return (
    <div>
      <div>
        <span>Название:{formInfo[0].formName}</span>
        <span>Запрос:</span>
        <span>Сортировка:{formInfo[0].sortingType}</span>
        <span>Max количество видео:{formInfo[0].rangeValue}</span>
      </div>
      <div>
        <button>Отмена</button>
        <button>Выполнить</button>
      </div>
    </div>
  );
};
