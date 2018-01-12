import React from 'react';
import Reflux from 'reflux';
import { Button, Modal, Radio, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import DoctorActions from '../actions/DoctorActions'; 
//import LoginStore from '../stores/LoginStore';

class EditDoctorModal extends Reflux.Component {
	constructor(props)
    {
        super(props);
		this.state = { show: false, userId: undefined, selectedRowData: [], username: undefined, email: undefined, phone: undefined, pic: undefined, status: undefined};
		this.close = this.close.bind(this) ; 
		this.submit = this.submit.bind(this) ; 
		this.show = this.show.bind(this) ; 
		this.handleChange = this.handleChange.bind(this) ; 
		this.getValidationState = this.getValidationState.bind(this) ; 
	}

	show(row) {
		console.log( row ) ;
		this.setState({
            show: true,
            userId: row.userId,
            selectedRowData: row,
            username: row.username,
            email: row.email,
            phone: row.phone,
            status: row.status,
            file: row.file,
		});
	}

	close() {
		this.setState({
			show: false
		});
	}

	submit() {
        console.log( this.state ) ;
        var updateData = {  userId : this.state.userId ,
                            username : this.state.username , 
                            email : this.state.email , 
                            phone : this.state.phone ,
                            pic : this.state.file ,
                            status : this.state.status };
		DoctorActions.update( updateData );
		this.setState({
			show: false
		});
	}

	getValidationState() {
		console.log( 'getValidationState' ) ;
		return 'success';
	}

	handleChange(e) {
        console.log( e.target.id ); 
        console.log( e.target.value );
        switch ( e.target.id ) {
            case 'usernameInput':
                this.setState({ username: e.target.value });
            break;
            case 'emailInput':
                this.setState({ email: e.target.value });
            break;
            case 'phoneInput':
                this.setState({ phone: e.target.value });
            break;
            case 'fileInput':
                this.setState({ file: e.target.value });
            break;
            case 'optionsRadios1':
                this.setState({ status: e.target.value });
            break;
            case 'optionsRadios2':
                this.setState({ status: e.target.value });
            break;
            default :
            break;
        }
    }

	render() {
		var me = this;
        var username = this.state.selectedRowData === [] ? null : this.state.selectedRowData.username ; 

		return (
			<div style={{display: this.state.show ? 'block': 'none'}}>
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>{username}</Modal.Title>
					</Modal.Header>
					
					<Modal.Body>
						<form ref="refForm">
                            <ControlLabel>Doctor Name</ControlLabel>
                            <FormControl
                            id="usernameInput"
                            type="text"
                            //label="Doctor Name"
                            placeholder="Enter text"
                            value={this.state.username} onChange={this.handleChange}
                            />
                            <ControlLabel>Email address</ControlLabel>
                            <FormControl
                            id="emailInput"
                            type="email"
                            //label="Email address"
                            placeholder="email"
                            value={this.state.email} onChange={this.handleChange}
                            />
                            <ControlLabel>Phone</ControlLabel>
                            <FormControl
                            id="phoneInput"
                            //label="Phone"
                            type="text"
                            value={this.state.phone} onChange={this.handleChange}
                            />
                            <ControlLabel>照片上傳{' '}</ControlLabel>
                            <FormControl
                            id="fileInput"
                            type="file"
                            value={this.state.pic} onChange={this.handleChange}
                            />
                            <FormGroup>
                                <Radio name="radioGroup" inline  id="optionsRadios1" value="active" checked={this.state.status === 'active'} onChange={this.handleChange} >
                                Active
                                </Radio>
                                <Radio name="radioGroup" inline  id="optionsRadios2" value="inactive" checked={this.state.status === 'inactive'}  onChange={this.handleChange} >
                                InActive
                                </Radio>
                            </FormGroup>

                            {/*
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Doctor Name</label>
                                <input type="text" value={this.state.username} onChange={this.handleChange} className="form-control" id="usernameInput"  placeholder={username} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email</label>
                                <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailInput" placeholder="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Phone</label>
                                <input type="text" value={this.state.phone} onChange={this.handleChange} className="form-control" id="phoneInput" placeholder="phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">照片上傳</label>
                                <input type="file" value={this.state.pic} onChange={this.handleChange} className="form-control-file" id="fileInput" aria-describedby="fileHelp" />
                            </div>
                            <fieldset className="form-group">
                            <legend>status</legend>
                            <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="active" checked={this.state.status === 'active'} onChange={this.handleChange} />
                                        Active&nbsp;&nbsp;
                                    </label>
                                    <label className="form-check-label">
                                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="inactive" checked={this.state.status === 'inactive'}  onChange={this.handleChange} />
                                        InActive
                                    </label>
                                </div> 
                            </fieldset>*/}
						</form>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={me.submit}>確定</Button>
						<Button onClick={me.close}>取消</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</div>
		);
	}
};

EditDoctorModal.defaultProps = {
  showCloseButton: true,
  animation: true,
  keyboard: true
};

export default EditDoctorModal;