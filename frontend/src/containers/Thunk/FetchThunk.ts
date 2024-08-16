import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosAPI from "../../axios/AxiosAPI.ts";

interface Message {
    author?: string;
    message: string;
    photo?: File | null;
}
interface MessageState {
    data: Message[];
    error: boolean;
    loading: boolean;
}

const initialState: MessageState = {
    data: [],
    error: false,
    loading: false,
}

export const postData = createAsyncThunk<Message[], { author?: string; message: string; photo?: File }>(
    'book/postMessage',
    async ({ author, message, photo}) => {
        try {
            const formData = new FormData();
            formData.append('author', author)
            formData.append('message', message)

            if(photo){
                formData.append('photo', photo)
            }
            const response = await axiosAPI.post(`/messages` , formData);
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
);

export const createMessage = createSlice({
    name:'guestbook',
    initialState,
    reducers:{
        clearError: (state) => {
            state.error = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postData.pending, (state:MessageState) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(postData.fulfilled, (state:MessageState, action: PayloadAction<Message[]>) => {
                state.loading = false;
                state.error = false;
                state.data = action.payload;
            })
            .addCase(postData.rejected, (state:MessageState) => {
                state.loading = false;
                state.error = true;
            });
    }
})

export const GuestBookReducer = createMessage.reducer;