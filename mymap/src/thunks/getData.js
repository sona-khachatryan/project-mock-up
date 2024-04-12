import {createAsyncThunk} from "@reduxjs/toolkit";

export const getFeatures = createAsyncThunk(
    'map/getFeatures',
    async () => {
        return fetch('http://localhost:8000/features')
            .then(res => res.json())
    }
)

export const getName = createAsyncThunk(
    'map/getName',
    async () => {
        return fetch('http://localhost:8000/name')
            .then(res => res.text())
    }
)
