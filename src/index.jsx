import React from 'react';
import { render } from 'react-dom';
import './style.css';
import './jokes.js';
import { jokes } from './jokes.js';
import { Joke } from './Joke/index';

const App = () => {
  return (
    <div className="container">
      {jokes.map((item) => {
        return <Joke {...item} key={item.id} />;
      })}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
