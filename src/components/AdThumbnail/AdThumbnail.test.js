import React from 'react';
import ReactDOM from 'react-dom';
import AdThumbnail from './AdThumbnail';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdThumbnail />, div);
  ReactDOM.unmountComponentAtNode(div);
});