import { configureStore } from '@reduxjs/toolkit'
import moneyLogicReducer from './balance'
import statisticLogicReducer from './gameStatistic'

export const store = configureStore({
  reducer: {
    moneyLogic: moneyLogicReducer,
    statisticLogic: statisticLogicReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch