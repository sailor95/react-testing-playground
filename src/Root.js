import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from 'reducers';

export default ({ children, initState = {} }) => (
  <Provider store={createStore(reducers, initState)}>
    {children}
  </Provider>
);