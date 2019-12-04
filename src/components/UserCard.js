import React from 'react'
import styled, {keyframes} from 'styled-components'
import { flipInY, flip, tada, bounceIn } from 'react-animations';

const tadaAnim = keyframes`${tada}`
const flipYAnim = keyframes `${flipInY}`
const flipAnim = keyframes `${flip}`
const bounceAnim = keyframes `${bounceIn}`

const Card = styled.div `
    animation: 1s ${flipYAnim};
    display: flex;
    width: 395px;
    height: 195px;
    padding-top: 5px;
    justify-content: center;
    align-items: center;
    margin: 15px;
    background-color: #707070;
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
    transition: transform 300ms ease-in-out;
    &:hover{
        /* transform: scale(1.2); */
        animation: 0.5s ${bounceAnim};
        background-color: #98a4b8;
        .data p span{
            color: #b9d1fa;
        }
    }
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
            span{
                font-weight: bold;
                color: #8cb6df;
            }
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