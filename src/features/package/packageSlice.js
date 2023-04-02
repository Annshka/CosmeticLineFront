import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


const initialState = {
    package: null,
    isSuccess: null,
    isLoading: null,
    message: ''
}

export const packageSlice = createSlice({
    name: 'package',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
})

export const {reset} = packageSlice.actions;
export default packageSlice.reducer;