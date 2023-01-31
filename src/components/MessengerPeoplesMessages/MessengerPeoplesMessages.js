import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'

function MessengerPeoplesMessages() {
	const message = [
		{
			 id: '1',
			 img: 'https://img.freepik.com/premium-vector/robot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style_41737-796.jpg?w=2000',
			 name: 'Bot',
			 active: 'Active 30m ago'
		}
  ]
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			message.map(el => <MessengerPeoplesMessage key={el.id} img={el.img} name={el.name} active={el.active}/>)
		}
	 </div>
  )
}

export default MessengerPeoplesMessages
