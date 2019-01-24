import React from 'react';


const FriendsList = props => {


    return (props.friends.map(friend => {
        return (
        <div>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button 
                onClick={() => {
                    props.trashFriend(friend.id);
                    }}>
                Delete This Friend
            </button>
            <button 
                onClick={() => {
                    props.updateFriend(friend);
                    }}>
                Update Friend Details
            </button>
        </div>
        )
    }))



}

export default FriendsList