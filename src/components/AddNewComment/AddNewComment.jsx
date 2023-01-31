import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNewComment as addNewCommentPosts} from "../../store/slices/post/postSlice"
import IMAGES from '../../images'
import { addNewComment as addNewCommentUsers, selectUsers } from "../../store/slices/users/usersSlice"

function AddNewComment({ setIsShow, id }) {
    const formRef = useRef()
    const dispatch = useDispatch()
    const { currentUser } = useSelector(selectUsers)
    const handleSubmit = (e) => {
        e.preventDefault()
        const text = formRef.current[0].value
        const comment = {
            id: new Date().getTime().toString(),
            username: currentUser.username,
            text: text
        }
        dispatch(addNewCommentPosts({ id, comment }))
        dispatch(addNewCommentUsers({ id, comment }))
        
        formRef.current.reset()
    }
    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="comment-wrapper">
                <img src={IMAGES.smile} className="icon" alt="" />
                <input type="text" onFocus={() => setIsShow(true)} className="comment-box" placeholder="Add a comment" />
                <button className="comment-btn">post</button>
            </div>
        </form>
    )
}
export default AddNewComment