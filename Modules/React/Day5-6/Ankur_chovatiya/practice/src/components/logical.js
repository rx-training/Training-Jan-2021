import React from 'react'

export default function Logical(props) {

    const unreadMessages = props.unreadMessages

    return (
        <div>
            <h1>Hello</h1>
            {
            unreadMessages.length > 0 && 
                <h2>You have {unreadMessages.length} Unread messages.</h2>
            }
        </div>
    );
}
