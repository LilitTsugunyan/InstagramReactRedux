import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './MessengerChat.css'

function MessengerChat() {
  const { currentUser } = useSelector(selectUsers)
  return (
	 <div className='MessengerChat'>
		  {
            currentUser.messages.map(message => (
                <div key={message.id}>
                    <div className='userMsg'>
                        <p className='UserMessage'>{message.question}</p>
                    </div>
                    <div className='botMsg'>
                        <p >{message.answer}</p> 
                    </div>
                </div>
            ))
        }
	 </div>
  )
}

export default MessengerChat
