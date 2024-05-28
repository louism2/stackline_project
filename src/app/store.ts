import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productReducer.ts'

export const store = configureStore({
  reducer: {
    product: productReducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']