import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phonebookApi } from './phonebook-operation';
import { filter } from './phonebook-reducer';
// import phonebookReducer from './phonebook-reducer';

const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
});
setupListeners(store.dispatch);
// const store = configureStore({
//   reducer: {
//     phonebook: phonebookReducer,
//   },
// });

export default store;
