import React from 'react'

const UserCard = props => {
    // console.log (props)
    return(
        <div className='card' key={props.id}>
            <img width='200' src={props.avatar_url} alt={props.name} />
            <p>Name: {props.name}</p>
            <p><span>Location:</span>{props.location}</p>
            <p><span>Bio:</span>{props.bio}</p>
            <p><span>Blog:</span>{props.blog}</p>
        </div>
    )
}

export default UserCard;