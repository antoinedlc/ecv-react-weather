import { configureStore } from '@reduxjs/toolkit'
import citiesReducer from './reducers/citiesReducer'
import mapReducer from './reducers/mapReducer'

export default configureStore({
    reducer: {
        cities: citiesReducer,
        map: mapReducer
    }
})