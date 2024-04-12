import {createSlice} from "@reduxjs/toolkit";
import {getFeatures, getName} from "../../thunks/getData";

const mapSlice = createSlice({
    name: 'map',
    initialState: {
        name: '',
        features: [],
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFeatures.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getFeatures.fulfilled, (state, action) => {
                state.loading = false;
                state.features = action.payload;
            })
            .addCase(getFeatures.rejected, (state, action) => {
                state.loading = false;
                state.error = action?.error?.message;
            })
            .addCase(getName.fulfilled, (state, action) => {
                state.name = action.payload;
            })
            .addCase(getName.rejected, (state, action) => {
                state.name = 'Name unknown';
            })
    }
})

export const {} = mapSlice.actions;
export default mapSlice.reducer;