import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter} from 'react-router-dom'

import Nav from '../components/templates/Nav'
import Routes from './Routes'
import Footer from '../components/templates/Footer'



export default props =>
    <BrowserRouter>
        <div className="app">
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>