import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    id: '',
    token: ''   
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action) {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;
        },
        removeUser(state) {
            state.email = null;
            state.id = null;
            state.token = null;
        }
    }
})

export const { addUser, removeUser} = userSlice.actions
export const User = userSlice.reducer