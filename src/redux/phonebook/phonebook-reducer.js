import { createReducer } from '@reduxjs/toolkit';
import types from './phonebook-types';

export const filter = createReducer('', {
  [types.FILTER]: (_, action) => action.payload,
});
