import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import "./Favourite.css";
import { FavouriteForm } from "../Form/Form";

export default function Favourite() {
  const dispatch = useDispatch();
  const searchReducer = useSelector((state) => state.videoReducer);

  const [showForm, setShowForm] = useState(false);
  const [formInfo, setFormInfo] = useState(null);
  const info = (e) => {
    setShowForm(true);
    const itemInfo = searchReducer.formDate.filter((item) => e === item.id);
    console.log(searchReducer);
    setFormInfo(itemInfo);
  };

  const [favourite, setFavourite] = useState(searchReducer.formDate);
  const favouriteDate = favourite.map((item) => (
    <ul className="favourite__block">
      <li
        id={item.id}
        className="favourite__item"
        onClick={(e) => info(e.target.id)}
      >
        {item.formName}
        <div>
          <button className="favourite__button favourite__button--change">
            Изменить
          </button>
          <button className="favourite__button favourite__button--remove">
            Удалить
          </button>
        </div>
      </li>
    </ul>
  ));
  return (
    <div>
      <h1>Избранное</h1>
      {favouriteDate}
      {showForm ? <FavouriteForm formInfo={formInfo} /> : null}
    </div>
  );
}
