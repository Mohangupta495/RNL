import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice";
import inputReducer from './inputSlice';

const store = configureStore({
  reducer: {
    counter:counterReducer,
    input:inputReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;