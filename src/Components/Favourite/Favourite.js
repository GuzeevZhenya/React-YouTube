import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import "./Favourite.css";
import { FavouriteForm } from "../Form/Form";
import { Form } from "../Form/Form";

export default function Favourite() {
  const dispatch = useDispatch();
  const searchReducer = useSelector((state) => state.videoReducer);
  // const [ favourite, setFavourite ] = useState(searchReducer.formDate);

  const [showForm, setShowForm] = useState(false);
  const [showFavouriteForm, setShowFavouriteForm] = useState(false);
  const [formInfo, setFormInfo] = useState(null);

  const info = (e) => {
    setShowFavouriteForm(true);
    const itemInfo = searchReducer.formDate.filter((item) => e === item.id);
    setFormInfo(itemInfo);
  };

  const removeFavouriteVideo = (id) => {
    dispatch({ type: "REMOVE_VIDEO", value: id });
  };

  const changeInfo = (id) => {
    setShowForm(!showForm);
    const itemInfo = searchReducer.formDate.filter((item) => id === item.id);
    setFormInfo(itemInfo);
  };

  const favouriteDate =
    searchReducer.formDate &&
    searchReducer.formDate.map((item) => (
      <div>
        <ul className="favourite__block">
          <li
            id={item.id}
            className="favourite__item"
            onClick={(e) => info(e.target.id)}
          >
            {item.formName}
          </li>
          <div>
            <button
              className="favourite__button favourite__button--change"
              onClick={() => changeInfo(item.id)}
            >
              Изменить
            </button>
            <button
              className="favourite__button favourite__button--remove"
              onClick={() => removeFavouriteVideo(item.id)}
            >
              Удалить
            </button>
          </div>
        </ul>
      </div>
    ));
  return (
    <div>
      <h1>Избранное</h1>
      {showForm ? (
        <Form
          setShowForm={setShowForm}
          changeValue={true}
          formInfo={formInfo}
        />
      ) : null}
      {favouriteDate}
      {showFavouriteForm ? (
        <FavouriteForm
          setShowFavouriteForm={setShowFavouriteForm}
          formInfo={formInfo}
        />
      ) : null}
    </div>
  );
}

//
