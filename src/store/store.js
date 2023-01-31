import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ignoreEmptyPost } from "./middleware/createPost";
import { ignoreEmptyComment } from "./middleware/post";
import { postReducers } from "./slices/post/postSlice";
import { searchTxtReducers } from "./slices/searchTxt/searchTxtSlice";
import { usersReducer } from "./slices/users/usersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    posts: postReducers,
    users: usersReducer,
    searchTxt: searchTxtReducers
})

const persistConfig = {
    key: 'instaProject',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => (
        [...getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }),ignoreEmptyComment,ignoreEmptyPost]
    )
})

export const persistor = persistStore(store)
export default store