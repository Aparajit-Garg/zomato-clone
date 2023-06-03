import { createSlice } from "@reduxjs/toolkit";

const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        loggedIn: false,
        userImg: "",
        loading: false,
        error: null
    }
});

export default userDetail.reducer;