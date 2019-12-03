import React from 'react'
import styled from 'styled-components'

const Card = styled.div `
    display: flex;
    width: 400px;
    height: 200px;
    justify-content: center;
    align-items: center;
    margin: 20px;
    background-color: lightgrey;
    .pic{
        width: 175px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .data{
        margin-left: 10px;
        width: 49%;
        text-align: left;
        width: 175px;
        height: 175px;
        overflow: hidden;
        p{
            margin-bottom: 1px;
            margin-left: 5px;
        }
    }
`

const UserCard = props => {
    // console.log (props)
    return(
        <div className='card' key={props.id}>
        <Card>
            <div className='pic'>
                <img src={props.avatar_url} alt={props.name} />
            </div>
            <div className='data'>
                <p><span>Name:</span> {props.name}</p>
                <p><span>Location: </span>{ props.location ? `${props.location}` : "unknown"}</p>
                <p><span>Bio: </span>{ props.bio ? `${props.bio}` : 'N/A'}</p>
                <p><span>Blog: </span>{ props.blog ? `${props.blog}` : 'N/A' }</p>
            </div>
        </Card>
        </div>
    )
}

export default UserCard;