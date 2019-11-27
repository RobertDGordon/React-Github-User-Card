import React from 'react'

const UserCard = props => {
    // console.log (props)
    return(
        <div className='card' key={props.id}>
            <img width='200' src={props.avatar_url} alt={props.name} />
            <p><span>Name:</span> {props.name}</p>
            <p><span>Location: </span>{ props.location ? `${props.location}` : "unknown"}</p>
            <p><span>Bio: </span>{ props.bio ? `${props.bio}` : 'N/A'}</p>
            <p><span>Blog: </span>{ props.blog ? `${props.blog}` : 'N/A' }</p>
        </div>
    )
}

export default UserCard;