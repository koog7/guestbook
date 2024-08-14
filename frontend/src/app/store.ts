import {configureStore} from "@reduxjs/toolkit";
import {GuestBookReducer} from "../containers/Thunk/FetchThunk.ts";

export const store = configureStore({
    reducer:{
        guestbook: GuestBookReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;