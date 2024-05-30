// @ts-ignore
//@ts-nocheck


import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { cardsApi } from '../services/cards'
import themeSlice from './themeSlice'


const persistConfig = {
  key: 'root',
  storage,
  blacklist: [cardsApi.reducerPath], // Specify reducers to exclude from persistence
}
const rootReducer = combineReducers({
  auth: authReducer,
  [cardsApi.reducerPath]: cardsApi.reducer,
  theme: themeSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER],
      },
    }).concat(cardsApi.middleware), 
});


export const persistor = persistStore(store);


export default store;
