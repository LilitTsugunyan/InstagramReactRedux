import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import { selectUsers, tooggleCurrentUser } from '../../store/slices/users/usersSlice'
import './LogIn.css'

function LogIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser, data: users } = useSelector(selectUsers)
    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser])

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers())
        }

    }, [])

    const formRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(tooggleCurrentUser({
            login: formRef.current[0].value,
            password: formRef.current[1].value
        }))
    }
    return (
        <div className="Login">
            <div className="Form">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <img src="/static/media/logo.a96501a686589d1697a8.PNG" alt="" />
                    <input
                        defaultValue={'antonette'}
                        type="text"
                        name="email"
                        placeholder="Phone number, username, or email"
                    />
                    <input
                        defaultValue={'wisokyburgh'}
                        type="password"
                        name="password"
                        placeholder="Enter password"
                    />
                    <button type="submit">Login</button>
                    <span>Don't have an account? Sign up</span>
                </form>
            </div>
        </div>
    )


}
export default LogIn