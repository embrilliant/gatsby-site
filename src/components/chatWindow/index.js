import React from 'react';
import classNames from 'classNames';

class ChatWindow extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	windowOpen: false,
	    	test: 0
	    }

	    this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick() {
		this.setState({
			windowOpen: !this.state.windowOpen,
			test: this.state.test + 1
		});
	}

	render() {
		return (
			<div id='chat-window' className='chat-window'>
		      <header>
		        <h5>Chat with my representative</h5>
		        <span 
		        	className={ classNames('toggle-button', { 
		        		open: this.state.windowOpen,
		        		close: !this.state.windowOpen  
		        	}) } 
		        	onClick={ this.handleOnClick }
		        >{ this.state.test }</span>
		      </header>
		      <div id='chat-app' 
		      		className={ classNames('chat-app', { 
		      			open: true 
		      		}) }>
		      </div>
		    </div>
		)
	}
};

export default ChatWindow;