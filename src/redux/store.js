import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import { phonebookApi } from './phonebook/phonebook-operation';
import { filter } from './phonebook/phonebook-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// import { filter } from './phonebook/phonebook-reducer';
// // import phonebookReducer from './phonebook-reducer';

// const store = configureStore({
//   reducer: {
//     [phonebookApi.reducerPath]: phonebookApi.reducer,
//     filter,
//     [authApi.reducerPath]: authApi.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(phonebookApi.middleware),
// });
// setupListeners(store.dispatch);

// export default store;
