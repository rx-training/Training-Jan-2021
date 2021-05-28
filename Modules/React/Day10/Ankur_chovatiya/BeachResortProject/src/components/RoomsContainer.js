import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
// import { RoomConsumer } from '../context'
import Loading from './Loading'
import { withRoomConsumer } from '../context'

function RoomsContainer({context}){
    const {loading , sortedRooms , rooms} = context;
    if(loading){
        return <Loading></Loading>
        }
        return (
            <div>
                
                <RoomsFilter rooms={rooms}></RoomsFilter>
                <RoomsList rooms={sortedRooms} ></RoomsList>
            </div>
            )
}

export default withRoomConsumer(RoomsContainer)
// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             { value => {
                
//                 const {loading , sortedRooms , rooms} = value
                   
//                     if(loading){
//                         return <Loading></Loading>
//                     }
//                     return (
//                         <div>
//                             hello from rooms container 
//                             <RoomsFilter rooms={rooms}></RoomsFilter>
//                             <RoomsList rooms={sortedRooms} ></RoomsList>
//                         </div>
//                         )
//                 }
//             }
//         </RoomConsumer>
      
//     )
// }
