import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.scss'

import Nav from './components/Nav'

import Home from './views/Home'
import Search from './views/Search'

const rootElement = document.getElementById('root')
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
    )