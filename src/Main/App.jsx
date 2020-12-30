import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Nav from '../components/templates/Nav'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'



export default props =>
    <div className="app">
        <Nav/>
        <Main/>
        <Footer/>
    </div>