import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { addNewmessage, selectUsers} from '../../store/slices/users/usersSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'



function MessengerChatForm() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const formRef = useRef(null)
	const { currentUser } = useSelector(selectUsers)
	const [sendButton, setSendButton] = useState(false)
	
	const handleSubmit = (e) => {
		e.preventDefault()
        const text = formRef.current[0].value
        dispatch(addNewmessage({ text }))
        formRef.current.reset()
		setSendButton(false)
        
	}
	useEffect(() => {
        if(!currentUser) {
            navigate('/login')
        }
    }, [currentUser])
  return (
	 <div className='Chat-box'>
		<form onSubmitCapture={handleSubmit} ref={formRef} className='Chat-input'>
		<input type='text' onChange={() => setSendButton(true)}   placeholder='Message...'/>   
		<img src={sendButton ? IMAGES.send : IMAGES.like} onClick={handleSubmit}  alt='' />
		</form>
		
	 </div>
  )
}

export default MessengerChatForm
