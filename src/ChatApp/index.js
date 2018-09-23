import React from 'react';
import ChatContainer from './containers/chat';

class ChatApp extends React.Component {
	constructor(props) {
	    super(props);
	}

	render() {
		return (
			<div className="chat-app">
				<ChatContainer />
			</div>
		)
	}
};

export default ChatApp;