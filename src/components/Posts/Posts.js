import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/slices/post/postAPI'
import { selectPosts } from '../../store/slices/post/postSlice'
import { resetSearchTxt, selectSearchTxt } from '../../store/slices/searchTxt/searchTxtSlice'
import Post from '../Post/Post'

function Posts() {
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)
    const searchTxt = useSelector(selectSearchTxt)
    useEffect(() => {
        if (!posts.length) {
            dispatch(fetchPosts())
        }
    }, [])
    const filteredPosts = useMemo(() => {
        return posts.filter(post => post.name.includes(searchTxt.toLowerCase()))
    }, [posts, searchTxt])

    useEffect(() => {
        return () => {
            dispatch(resetSearchTxt())
        }
    }, [])
    return (
        <>
            {
                filteredPosts.map(el => <Post key={el.id} id={el.id} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} comments={el.comments} />)
            }
        </>
    )
}

export default Posts