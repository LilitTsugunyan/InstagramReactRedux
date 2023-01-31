import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logOut, selectUsers } from '../../store/slices/users/usersSlice'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
import Suggestions from '../Suggestions/Suggestions'

function Main() {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(selectUsers)
    const navigate = useNavigate()
    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])
    return (
        <section className="main">
            <div className="wrapper">
                <div style={{display:'flex'}}>
                    <div className="left-col">
                        <Stories />
                        <Posts />
                    </div>
                    <div className="right-col" >
                        <NavLink to='/profile' className="profile-card">
                            <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                                <div className="profile-pic">
                                    <img src={`https://cdn-icons-png.flaticon.com/512/149/149071.png`} alt="" />
                                </div>
                                <div >
                                    <p className="username">{currentUser?.username}</p>
                                    <p className="sub-text">{currentUser?.bio}</p>
                                </div>
                                <button className="action-btn" onClick={() => dispatch(logOut())}>switch</button> 
                            </div>
                        </NavLink>
                        <p className="suggestion-text">Suggestions for you</p>
                        <Suggestions />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main