import React from 'react';

function AddFriendForm(props) {
    return (
        <form onSubmit={props.addFriend}>
            <input 
                type= "text"
                name='name' 
                placeholder='friend name'
                value={props.newFriend.name} 
                onChange={props.changeHandler} />
            <input 
                type= "text"
                name='age' 
                placeholder='friend age'
                value={props.newFriend.age} 
                onChange={props.changeHandler} />
            <input 
                type= "text"
                name='email' 
                placeholder='friend email'
                value={props.newFriend.email} 
                onChange={props.changeHandler} />
            <button type="submit">Add Friend</button>
        </form>
    );
}

// need to add changeHandler, addFriend functions 

// addfriend function should handle the axios post request 

export default AddFriendForm;
