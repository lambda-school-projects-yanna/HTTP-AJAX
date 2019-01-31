import React from 'react';
import styled from 'styled-components';

// make sure var name is capitalized!!
const FriendDiv = styled.div`{
    border: solid gray 1px;
    margin: 20px;
    width: 25%;
}`; 

const FriendsList = props => {


    return (props.friends.map(friend => {
        return (
        <FriendDiv>
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
        </FriendDiv>
        )
    }));
};

export default FriendsList