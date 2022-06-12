import React from 'react'
import './FollowersCard.css'

import {Followers} from '../../data/FollowersData'

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h3>Who is folowing you</h3>
        {
            Followers.map((follower,id)=>{
            return (
                <div className="follower">
                    <div>
                    <img src={follower.img} alt="" className='followerImg'/>
                    
                    <div className="name">
                        <span>{follower.name}</span>
                        <span>@{follower.username}</span>
                    </div>
                    <button className="button fc-button">Follow</button>
                    </div>
                </div>
                
            )
            }
        )}
    </div>
  )
}

export default FollowersCard