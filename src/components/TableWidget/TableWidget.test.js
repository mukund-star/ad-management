import React from 'react';
import ReactDOM from 'react-dom';
import TableWidget from './TableWidget';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableWidget />, div);
  ReactDOM.unmountComponentAtNode(div);
});