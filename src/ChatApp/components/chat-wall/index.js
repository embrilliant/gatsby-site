import React from 'react';
import './_chat-wall.scss';
// import axios from 'axios';

class MsgWall extends React.Component {

	componentDidMount() {
		this.scrollWallToBottom();
	}

	componentDidUpdate() {
		this.scrollWallToBottom();

		/*axios({
			method: 'post',
 			url: 'log/log.php',
 			data: {
    			sender: this.props.senders[this.props.senders.length - 1],
    			message: this.props.wall[this.props.wall.length - 1]
			}
		});*/
	}

	scrollWallToBottom() {
		const wall = document.querySelector('.msg-lines .text');
		wall.scrollTop = wall.scrollHeight;
	}

	render() {
		const msgLines = this.props.msgs.map((msg, index) => {
				const sender = this.props.senders[index];
				const msgClassName = 'message';
				const contentClassName = 'content';
				
				return msg === 'email' ?
				(
					<div className={ `${msgClassName} ${sender} contact` } key={ index }>
						<p className={ contentClassName }>
							Please contact Emily at 
							em@emilywu.co.uk 
							for your concern.
						</p>
					</div>
				) :
				(
					<p className={ `${msgClassName} ${sender}` } key={ index }>
						<span className={ contentClassName }>{ msg }</span>
					</p>
				)
			}
		)

		return (
			<div className="chat-wall">
				<div className="msg-lines">
					<div className="text">
						<div className="inner-block"></div>
						{ msgLines }
					</div>
				</div>
      		</div>
		)
	}
};

export default MsgWall