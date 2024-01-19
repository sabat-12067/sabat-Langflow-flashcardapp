import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../../src/state/auth'


const store = configureStore({
  reducer: {
    auth: authReducer
  }
})
export default store