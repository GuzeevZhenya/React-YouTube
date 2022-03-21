import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import './Video.css';

export const Video = ({ position,movies }) => {
  const dispatch = useDispatch();
  const videoReducer = useSelector((state) => state.videoReducer);

  // const video =
  //   videoReducer.videos.items &&
  //   videoReducer.videos.items.map((item) => (
  //     <div className="video__item" key={item.id.videoId}>
  //       <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
  //         <img
  //           src={item.snippet.thumbnails.medium.url}
  //           width="260px"
  //           height="120px"
  //           alt={item.snippet.title}
  //         />
  //         <h5 className="video__container-title">{item.snippet.title}</h5>
  //       </a>
  //       <div>
  //         <p>{item.snippet.channelTitle}</p>
  //         <p />
  //       </div>
  //     </div>
  //   ));

  
  const video =
  movies &&
  movies.map((item) => (
      <div className="video__item" key={item.id.videoId}>
        <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
          <img
            src={item.snippet.thumbnails.medium.url}
            width="260px"
            height="120px"
            alt={item.snippet.title}
          />
          <h5 className="video__container-title">{item.snippet.title}</h5>
        </a>
        <div>
          <p>{item.snippet.channelTitle}</p>
          <p />
        </div>
      </div>
    ));

  return <div className={`video__container video__container--${position}`}>{video}</div>;
};
