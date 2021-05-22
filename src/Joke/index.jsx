import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const [likesUp, setLikesUp] = useState(props.likes);
  const [likesDown, setLikesDown] = useState(props.dislikes);

  const handleClickUp = () => {
    setLikesUp(likesUp + 1);
  };

  const handleClickDown = () => {
    setLikesDown(likesDown + 1);
  };
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={props.avatar} />
          <p className="user-name">{props.name}</p>
        </div>

        <p className="joke__text">{props.text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={handleClickUp}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likesUp}
        </span>
        <button
          onClick={handleClickDown}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {likesDown}
        </span>
      </div>
    </div>
  );
};
