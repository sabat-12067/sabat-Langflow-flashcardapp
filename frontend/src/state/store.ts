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


const persistConfig = {
  key: 'root',
  storage,
  blacklist: [cardsApi.reducerPath], // Specify reducers to exclude from persistence
}
const rootReducer = combineReducers({
  auth: authReducer,
  [cardsApi.reducerPath]: cardsApi.reducer,
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
