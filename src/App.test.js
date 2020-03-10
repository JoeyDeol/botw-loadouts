import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';


test('App should render without crashing.', () =>{
  const container = document.createElement('div');

  ReactDOM.render(<App />, container);
})
