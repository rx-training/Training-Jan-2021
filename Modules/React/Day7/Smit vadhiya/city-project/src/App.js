import React, { Component } from 'react'
import './App.scss'
import Navbar from './components/navbar/navbar'
import TourList from './components/TourList'

export default class App extends Component {
    render() {
        return (
            <div className="th">
                <Navbar />
                <TourList />
            </div>
        )
    }
}
