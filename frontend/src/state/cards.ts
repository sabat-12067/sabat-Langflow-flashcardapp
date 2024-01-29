import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cardsApi } from '../services/cards'

export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
})


setupListeners(store.dispatch)