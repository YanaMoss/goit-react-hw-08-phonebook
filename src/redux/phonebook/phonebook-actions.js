import { createAction } from '@reduxjs/toolkit';
import types from './phonebook-types';
export const filterContact = createAction(types.FILTER);
