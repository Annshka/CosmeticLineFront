import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import packageService from "./packageService";
import {toast} from "react-toastify";


const initialState = {
    packages: [],
    isSuccess: null,
    isLoading: null,
    message: ''
}

//Create new package
export const createPackage = createAsyncThunk(
    'packages/create',
    async (packageData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            // console.log('createPackage / packageSlice')
            return await packageService.createPackage(packageData, token)

        } catch (err) {
            const message =
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                err.message ||
                err.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//Get packages
export const getPackages = createAsyncThunk(
    'packages/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            // console.log('getPackages / packageSlice')
            return await packageService.getPackages(token)
        } catch (err) {
            const message =
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                err.message ||
                err.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


//Get one package data
export const getPackage = createAsyncThunk(
    'packages/getOne',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            // console.log('getPackage / packageSlice')
            return await packageService.getPackage(id, token)
        } catch (err) {
            const message =
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                err.message ||
                err.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Update packaging
export const updatePackage = createAsyncThunk(
    'packages/update',
    async ({id, packageData}, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await packageService.updatePackage(packageData._id, packageData, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


// Delete packaging
export const deletePackage = createAsyncThunk(
    'packages/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await packageService.deletePackage(id, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const packageSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPackage.pending, (state) => {
                state.isLoading = true

            })
            .addCase(createPackage.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.packages.push(action.payload)
                toast.success("Package created", {
                    position: "bottom-left"
                })
            })
            .addCase(createPackage.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPackages.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPackages.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.packages = action.payload
            })
            .addCase(getPackages.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPackage.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPackage.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.packages = action.payload
            })
            .addCase(getPackage.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updatePackage.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updatePackage.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.packages = state.packages.map((packaging) =>
                    packaging._id === action.payload._id ? action.payload : packaging
                )
                toast.info("Package edited", {
                    position: "bottom-left"
                })
            })
            .addCase(updatePackage.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deletePackage.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deletePackage.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.packages = state.packages.filter(
                    (packaging) => packaging._id !== action.payload.id
                )
                toast.error("Package removed", {
                    position: "bottom-left"
                })
            })
            .addCase(deletePackage.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = packageSlice.actions;
export default packageSlice.reducer;