import React from 'react';
import Reflux from 'reflux';
import { Button, Modal } from 'react-bootstrap';

class ConfirmModal extends Reflux.Component {

	constructor(props)
    {
        super(props);
		this.state = { confirmMsg: false, confirmFunc: [], blockConfirmBtn: false, show: false}; 
		this.close = this.close.bind(this) ; 
		this.show = this.show.bind(this) ; 
		this.confirmFunc =  this.confirmFunc.bind(this) ; 
	}

	show(confirmMsg, confirmFunc) {
		this.setState({
			show: true,
			blockConfirmBtn: false,
			confirmMsg: confirmMsg,
			confirmFunc: confirmFunc
		});
	}

	close(result) {
		if(result !== 'confirm'){
			result = 'cancel';
		}
		this.setState({
			show: false,
			blockConfirmBtn: false
		});
		//this.props.onClose.call(this, result);
	}

	confirmFunc() {
		this.setState({
			blockConfirmBtn: true
		}, function(){
			this.state.confirmFunc();
			this.close('confirm');
		});
	}

	render() {
		//var me = this;
		return (
			<div style={{display: this.state.show ? 'block': 'none'}}>
				<Modal.Dialog /*backdrop='static' show={this.state.show} onHide={this.close}*/ bsSize='small'>
					<Modal.Header /*bsClass='confirm-modal'*/>
						{/* <i className="fa fa-question-circle fa-inverse fa-3x" aria-hidden="true" style={{float: "left"}}/>
						<div style={{paddingLeft: "45px", wordWrap: "break-word"}}> */}
							<Modal.Title>
								{this.state.confirmMsg}
							</Modal.Title>
						{/* </div> */}
					</Modal.Header>
					<Modal.Footer>
						<Button bsStyle='primary' onClick={this.confirmFunc} disabled={this.props.disabled || this.state.blockConfirmBtn}>{'YES'}</Button>
						&nbsp;&nbsp;
						<Button bsStyle='default' onClick={this.close}>{'NO'}</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</div>
		);
	}
};

// ConfirmModal.propTypes = {
// 	onClose: React.PropTypes.func,
// 	disabled: React.PropTypes.bool
// };


ConfirmModal.defaultProps = {
	//onClose: function() {},
	disabled: false
};

export default ConfirmModal;
