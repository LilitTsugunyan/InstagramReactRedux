import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { addPost as addPostPosts } from '../../store/slices/post/postSlice';
import { addPost as addPostUsers, selectUsers } from '../../store/slices/users/usersSlice';
import './CreatePost.css'
const CreatePost = () => {
    const dispatch = useDispatch()
    const formRef = useRef()
    const navigate = useNavigate()
    const { currentUser } = useSelector(selectUsers)

    useEffect(() => {
        if (!currentUser)
            navigate('/login')
    }, [currentUser])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const { img: { value: img }, desc: { value: desc } } = formRef.current
        const post = {
            id: new Date().getTime().toString(),
            name: currentUser.username.toLowerCase(),
            likesCount: Math.round(Math.random() * 500 + 500),
            timeAgo: Math.round(Math.random() * 8 + 2) + ' Minutes Ago',
            postText: desc,
            img: img,
            comments: []
        }
        dispatch(addPostPosts(post))
        dispatch(addPostUsers(post))
        navigate('/')
    }
    return (
        <div style={{ marginTop: '100px', textAlign: 'center' }} className='container'>
            <h1 style={{ fontSize: '50px' }}>Create Post</h1>
            <br />
            <br />
            <form style={{ marginTop: '50px' }} ref={formRef} onSubmit={handleSubmit}>
                <input type="text" name='img' placeholder='Image URL' />
                <br />
                <br />
                <input type='text' name='desc' placeholder='Description' />
                <br />
                <br />
                <button className="action-btn" onClick={() => handleSubmit}>Add Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
