import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../reducers/counterSlice'
import dataReducer from '../reducers/dataReducer'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    dataReducer
  },
})