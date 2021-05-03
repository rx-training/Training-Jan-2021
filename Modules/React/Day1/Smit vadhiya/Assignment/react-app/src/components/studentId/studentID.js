import React from 'react'
import { Collage } from './collage'
import { Image } from './image'
import { Personal } from './personal'
import '../../App.css'


export const StudentID = (props) => {
    var {id,firstName,lastNme,dob,clgName,clgAddress,clgLogo,path} = props.info
    return (
        <div id="std">
            <table>
                <thead>
                    {props.children}
                    <Image path = {path}></Image>
                </thead>
                <tbody id = "body">
                    <Personal id = {id} fname = {firstName} lname = {lastNme} dob = {dob}></Personal>
                    <Collage name ={clgName} address = {clgAddress} logo = {clgLogo}></Collage>
                </tbody>
            </table>
        </div>
    )
}
