import React from 'react';
import ReactDOM from 'react-dom';
import TableAndGraphWidget from './TableAndGraphWidget';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableAndGraphWidget />, div);
  ReactDOM.unmountComponentAtNode(div);
});