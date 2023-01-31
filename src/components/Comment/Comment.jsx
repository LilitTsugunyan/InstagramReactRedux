import React from 'react'
import { useEffect } from 'react'
function Comment({ comments, isShow, setIsShow }) {
    useEffect(
        () => {
            console.log("log")
        },[])
    return (
        
        <div>
            {
                !!comments.length && (
                    isShow ?
                    comments.map(comment => (
                        <p key={comment.id} className='description'><span>{comment.username}</span>{comment.text}</p>
                    ))
                    : <h2
                        style={{ cursor: 'pointer' }}
                        onClick={() => setIsShow(true)}
                    >Show All Comments </h2>
                    )
            }
        </div>

    )
}


export default Comment