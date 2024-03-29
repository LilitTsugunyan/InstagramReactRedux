import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        currentUser: null,
        chatTxt: '',
        sendButton: false
    },
    reducers: {
        tooggleCurrentUser(state, { payload }) {
            const user = state.data.find(user => (user.email === payload.login || user.username === payload.login) && user.password === payload.password)
            state.currentUser = user ? user : null
        },
        logOut(state) {
            state.currentUser = null
        },
        addPost(state, { payload }) {
            let idx = state.data.findIndex(user => user.id === state.currentUser.id)
            state.data[idx].posts.unshift({ ...payload })
            state.currentUser.posts.unshift({ ...payload })
        },
        delPost(state, { payload }) {
            let idx = state.data.findIndex(user => user.id === state.currentUser.id)
            state.data[idx].posts = [...state.data[idx].posts.filter(post => post.id !== payload)]
            state.currentUser.posts = [...state.data[idx].posts.filter(post => post.id !== payload)]
        },
        addNewComment(state, { payload }) {
            let idx = state.data.findIndex(user => user.id === state.currentUser.id)
            let postidx = state.data[idx].posts.findIndex(post => post.id === payload.id)
            if (postidx > 0) {
                state.data[idx].posts[postidx].comments.push({ ...payload.comment })
                state.currentUser.posts[postidx].comments.push({ ...payload.comment })
            }
        },
        addNewmessage(state, { payload }) {
            let idx = state.data.findIndex(user => user.id === state.currentUser.id)
            const answersArray = [
                {
                    question: 'how are you',
                    answer: "Fine... how are you?"
                },
                {
                    question: "hello",
                    answer: "Hello!"
                },
                {
                    question: "what are you doing",
                    answer: "Can you guess?"
                },
                {
                    question: "how old are you",
                    answer: "I am infinite"
                },
                {
                    question: "who are you",
                    answer: "I am a bot. What are you?"
                }

            ]
            if (payload === '') {
                state.currentUser.messages.push({
                    id: new Date().getTime().toString(),
                    question: `♥️`,
                    answer: `Bot: ♥️`
                })
                state.data[idx].messages.push({
                    id: new Date().getTime().toString(),
                    question: `♥️`,
                    answer: `Bot: ♥️`
                })

            }
            else {
                state.currentUser.messages.push({
                    id: new Date().getTime().toString(),
                    question: payload.text,
                    answer: `Bot: ${answersArray.some(el => el.question === payload.text.toLowerCase()) ?
                        answersArray.find(el => el.question === payload.text.toLowerCase()).answer :
                        'Go on...'}`
                })
                state.data[idx].messages.push({
                    id: new Date().getTime().toString(),
                    question: payload.text,
                    answer: `Bot: ${answersArray.some(el => el.question === payload.text.toLowerCase()) ?
                        answersArray.find(el => el.question === payload.text.toLowerCase()).answer :
                        'Go on...'}`
                })
            }
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                data: [...payload]
            }
        }
    }
})

export const selectUsers = state => state.users
export const selectChatTxt = state => state.chatTxt
export const selectSendButton = state => state.sendButton

export const { tooggleCurrentUser, logOut, addPost, addNewmessage, delPost, addNewComment } = usersSlice.actions

export const usersReducer = usersSlice.reducer