import React from 'react';
import ReactDOM from 'react-dom';
import MediaAddForm from './MediaAddForm';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MediaAddForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});