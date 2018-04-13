import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Why did you break it nooby? It usually renders without crashing I mean Ive been doing this for 6 weeks so I think I would know if it was going to crash so must be somethin YOU did', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
