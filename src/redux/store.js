import {configureStore} from '@reduxjs/toolkit';
import root from './reducers/root';

const store = configureStore({
  reducer: {
    root,
  },
});

export default store;
