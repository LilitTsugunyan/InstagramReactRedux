import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postAPI";

const postSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addNewComment(state, { payload }) {
            const idx = state.findIndex(post => post.id === payload.id)
            state[idx].comments.push({...payload.comment})
        },
        addPost(state, { payload }) {
            state.unshift({ ...payload })
        },
        delPost(state, payload) {
            state.filter(post => post.id !== payload)
        }
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, { payload }) => {
            return [...payload]
        }
    }
})

export const selectPosts = state => state.posts

export const { addNewComment, delPost, addPost } = postSlice.actions

export const postReducers = postSlice.reducer