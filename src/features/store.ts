import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from './balance'
import { gameStatisticReducer } from './gameStatistic'

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    gameStatistic: gameStatisticReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch