import React from 'react';

const FriendsList = props => {


    return (props.friends.map(friend => {
        return (
        <div>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
        )
    }))



}

export default FriendsList