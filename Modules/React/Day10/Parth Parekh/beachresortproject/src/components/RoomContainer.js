import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
}
export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// export default function RoomContainer() {
//     return (
//         <>
//             <RoomConsumer>
//                 {(value) => {
//                     //console.log(value);
//                     const { loading, sortedRooms, rooms } = value;
//                     if (loading) {
//                         return <Loading />;
//                     }
//                     return (
//                         <div>
//                             Room Container
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedRooms} />
//                         </div>
//                     );
//                 }}
//             </RoomConsumer>
//         </>
//     );
// }
