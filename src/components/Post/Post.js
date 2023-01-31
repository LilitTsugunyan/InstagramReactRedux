import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { withLessMore } from '../../hoc/withLessMore'
import IMAGES from '../../images'
import AddNewComment from '../AddNewComment/AddNewComment'
import Comment from '../Comment/Comment'

function Post({id, img, name, likesCount, postText, timeAgo, comments, isShow, setIsShow}) {
    useEffect(() => {console.log('post');},[] )
    return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            {!!postText && <p className="description"><span>{name} </span> {postText}</p>}
            <p className="post-time">{timeAgo}</p>
            <Comment comments = {comments} isShow = {isShow} setIsShow={setIsShow}/>
        </div>
       <AddNewComment id={id} setIsShow={setIsShow} />
    </div>
  )
}

export default withLessMore (Post)