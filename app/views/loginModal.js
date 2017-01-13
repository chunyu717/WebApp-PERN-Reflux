var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var Modal = require('react-bootstrap/lib/Modal');

var LoginModal = React.createClass({

	getInitialState: function() {
		return {
			showModal: false
		};
	},
	
	getDefaultProps: function() {

	},

	show: function() {
		this.setState({
			showModal: true
		})
	},

	close: function() {
		this.setState({
			showModal: false
		})
	},

    render: function() {
        var me = this ; 

        return (
        	<div>
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                	<Modal.Title>Modal heading</Modal.Title>
                	</Modal.Header>
               		<Modal.Body>
	                    <h4>Text in a modal</h4>
	                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
	                    <hr />

	                    <h4>Overflowing text to show scroll behavior</h4>
	                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
	                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      			</Modal.Body>
	                <Modal.Footer>
	                    <Button onClick={this.close}>Close</Button>
	                </Modal.Footer>
            	</Modal>
            </div>
        );
    }
});

module.exports = LoginModal;