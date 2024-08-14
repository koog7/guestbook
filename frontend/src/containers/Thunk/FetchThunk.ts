import {createSlice} from "@reduxjs/toolkit";

interface Message {
    author?: string;
    message: string;
    photo?: File | null;
}

const initialState: Message = {
    author: '',
    message: '',
    photo: null,
}

export const createMessage = createSlice({
    name:'guestbook',
    initialState,
    reducers:{
        clearError: (state) => {
            state.error = false;
        },
    },
    extraReducers: (builder) => {

    }
})

export const GuestBookReducer = createMessage.reducer;