import React from 'react';
import ReactDOM from 'react-dom';
import TextAddForm from './TextAddForm';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextAddForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});