import React from 'react';
import './_chat-bar.scss';

class ChatBar extends React.Component {
	constructor(props) {
	    super(props);

	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    
	    this.state = {
	    	value: '',
	    	placeholder: 'Say hello ...'
	    }
	}

	handleSubmit(e) {
		e.preventDefault();

		if (this.state.value !== '') {
			this.props.onChatBarSubmit(this.state.value);
			this.setState({
				value: '',
				placeholder: ''
			});
		}
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	render() {
		return (
			<div className='chat-bar'>
				<form onSubmit={ this.handleSubmit }>
					<input type='text' name='text' autoComplete='off' 
						placeholder={ this.state.placeholder }
						value={ this.state.value } 
						onChange={ this.handleChange } />
					<input type='submit' name='submit' value='Send' />
				</form>
      		</div>
		)
	}
};

export default ChatBar