import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './auth/auth-operation';
import { phonebookApi } from './phonebook/phonebook-operation';
import { filter } from './phonebook/phonebook-reducer';
// import phonebookReducer from './phonebook-reducer';

const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filter,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
});
setupListeners(store.dispatch);

export default store;
