import { createSlice } from '@reduxjs/toolkit'

const initialState = { userName: '', id: -1 }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.userName = action.payload.userName;
      state.id = action.payload.id;
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer