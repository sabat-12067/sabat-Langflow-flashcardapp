import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers(builder) {
    
  },
})

export const {setUser} = authSlice.actions
export default authSlice.reducer