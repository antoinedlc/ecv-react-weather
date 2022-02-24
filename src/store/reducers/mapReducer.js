import { createSlice } from '@reduxjs/toolkit'

export const mapSlice = createSlice({
    name: 'map',
    initialState: {
        markers: []
    },
    reducers: {
        addMarker: (state, action) => {
            state.markers.push(action.payload)
        }
    }
})

export const { addMarker } = mapSlice.actions

export default mapSlice.reducer