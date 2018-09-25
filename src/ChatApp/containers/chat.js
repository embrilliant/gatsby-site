import React from 'react';
import ChatWall from '../components/chat-wall';
import ChatBar from '../components/chat-bar';
import Robot from '../core/Robot';
import './_chat.scss';

class ChatContainer extends React.Component {
	constructor(props) {
	    super(props);
	    
	    this.handleChatBarSubmit = this.handleChatBarSubmit.bind(this);

	    this.state = {
	    	msgs: [],
	    	senders: [],
	    	memories: []
	    }

	    this._timeout = null;
	}

	handleChatBarSubmit(inputVal) {
		this.setState(
			(prevState) => {
				prevState.msgs.push(inputVal);
				prevState.senders.push('user');
				prevState.memories.push(inputVal);

				return this.state;
			},
			this.delayBotMsg
		)

		clearTimeout(this._timeout);
	}

	delayBotMsg() {
		this.addBotMsg = this.addBotMsg.bind(this);
		this._timeout = setTimeout(this.addBotMsg, 350);
	}

	addBotMsg() {
		const msgLines = this.state.msgs;
		const userMsg = msgLines[msgLines.length - 1];
		const botMsg = this.getBotMsg(userMsg);
		
		this.setState(
			(prevState) => {
				prevState.msgs.push(botMsg);
				prevState.senders.push('bot');

				return this.state;
			}
		);
  	}

  	getBotMsg(userMsg) {
  		const bot = new Robot();
  		const memories = this.state.memories;
		const memoriesToCheck = memories.slice(
			1, 
			memories.length - 1
		);

		if (memories.slice(0, memories.length - 1 ).length === 0) {
			return 'Hey!';
		}

		return memoriesToCheck.includes(userMsg) ? 
			'You\'ve said that.' :
			bot.getResponse(userMsg);
  	}

	render() {	
		return (
			<div className="chat-container">
				<ChatWall msgs={ this.state.msgs } senders={ this.state.senders } /> 
				<ChatBar onChatBarSubmit={ this.handleChatBarSubmit } />
      		</div>
		)
	}
};

export default ChatContainer;