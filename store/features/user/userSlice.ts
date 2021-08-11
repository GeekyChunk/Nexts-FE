import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

function token() {
	if (process.browser) {
	   return localStorage.getItem("token") || null
	}
}

interface CounterState {
  token: any,
  loggedIn: any,
  userData: any,
}

// Define the initial state using that type
const initialState: CounterState = {
  token: token(),
  loggedIn: false,
  userData() {
  	return 0
  }
}

if (initialState.token != null) {
	initialState.loggedIn = true
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload
    },
  }
})


export const { setToken } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.counter.token

export default userSlice.reducer