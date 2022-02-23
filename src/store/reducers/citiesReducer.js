import { createSlice } from '@reduxjs/toolkit'

export const citiesSlice = createSlice({
    name: 'city',
    initialState: {
        listCities: []
    },
    reducers: {
        addCity: (state, action) => {
            state.listCities.push(action.payload)
        }
    }
})

export const { addCity } = citiesSlice.actions

export default citiesSlice.reducer