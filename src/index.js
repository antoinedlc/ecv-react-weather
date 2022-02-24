import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.scss'
import store from './store/store'

import Nav from './components/Nav'

import Home from './views/Home'
import Search from './views/Search'
import Saved from './views/Saved'
import Map from './views/Map'

const rootElement = document.getElementById('root')
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="/map" element={<Map />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
    )