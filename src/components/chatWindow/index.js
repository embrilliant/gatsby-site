import React from 'react';
import classNames from 'classNames';
import ChatApp from '../../ChatApp';
import './_chat-window.scss';

class ChatWindow extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	windowOpen: false,
	    	test: 'unchanged'
	    }
	}

	componentDidMount() {
		this.setState({
			test: window.navigator.appVersion
		})
	}

	handleOnClick = () => {
		this.setState({
			windowOpen: !this.state.windowOpen,
			test: this.state.test + 1
		});
	}

	render() {
		const isSafari = (typeof window !== 'undefined') ? 
			window.navigator.appVersion.indexOf('Safari') > - 1 :
			false;

		return (
			<div id='chat-window' className={ classNames('chat-window', { 
	        		['is-safari']: false  
	        	}) }> 
		      <header onClick={ this.handleOnClick }>
		        <h5>Chat {this.state.test}</h5>
				<span className={ classNames('toggle-button', { 
	        		open: this.state.windowOpen,
	        		close: !this.state.windowOpen  
	        	}) } 
				></span>
		      </header>
		      <div id='chat-app-frame' 
		      		className={ classNames('chat-app-frame', { 
		      			open: this.state.windowOpen 
		      		}) }>
		      		<ChatApp />
		      </div>
		    </div>
		)
	}
};

export default ChatWindow;
