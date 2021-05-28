import React, { Component } from 'react'
import  {ReactSite, ToggleButton, LoggingButton, Greeting, LoginControl, Page, Calculator, TempConvert}  from './components/reactSite'
import BookList from './components/videoPractice/bookList'

export default class App extends Component {
    render() {
        return (
        <div>
            <div className="text-center">
                <h1 className="bg-dark p-3 text-center text-white"> React Site Practice </h1><br/>

                <h3 className=" btn-secondary p-2" >EVENT HANDLER</h3>
                    <ReactSite /> <br/>
                    <ToggleButton /><br/>
                    <LoggingButton /><br/>  <br/>

                <h3 className=" btn-secondary p-2" >CONDITIONAL RENDERING</h3><br/>
                    <Greeting   isLoggedIn = {true}/> {/* set this to falswe for change */} <br/>
                    <LoginControl /><br/>
                    <Page /><br/>

                <h3 className=" btn-secondary p-2" >Lifting State Up</h3><br/>
                    <TempConvert /><br/>
                    
            </div>
            
            <div>
                <h1 className="bg-dark p-3 text-center text-white"> Video Practice </h1><br/>  
                <BookList />
            </div>

        </div>
        )
}
}
