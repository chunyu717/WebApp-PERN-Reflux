import React from 'react';
import Reflux from 'reflux';
// import DoctorStore from '../stores/DoctorStore'; 
// import DoctorActions from '../actions/DoctorActions'; 
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import { /*Button,*/ FormControl, FormGroup } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import EditDoctorModal from '../component/EditDoctorModal'
// import ConfirmModal from '../component/ConfirmModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class PurchaseList extends Reflux.Component{
    constructor(props)
    {
        super(props);
        this.state = { cart: props.cart }; 
        //this.store = DoctorStore; 
        this.handleRowSelect = this.handleRowSelect.bind(this) ; 
       // this.deleteConfirmFunc = this.deleteConfirmFunc.bind(this) ;
        this.cleanSelected = this.cleanSelected.bind(this) ;
        this.notify = this.notify.bind(this);
        this.handleTemplateChange = this.handleTemplateChange.bind(this) ;     
    }

    componentDidMount() {
        //DoctorActions.load();
    }

    cleanSelected() {
        this.refs.bsTable.cleanSelected();
    }

    handleRowSelect(row,isSelected,e) {
        this.setState({
            editBtnDisabled: isSelected ? false : true , 
            selectedRowData: row
        });
    }

    editModal() {
        this.refs.refEditDoctorModal.show(this.state.selectedRowData);
    }

    confirmModal() {
        let confirmMsg = '確定刪除 [' +  this.state.selectedRowData.username  + '] ?' ;
        this.refs.refConfirmModal.show(confirmMsg, () => this.deleteConfirmFunc() );
    }
    
    // deleteConfirmFunc() {
    //     console.log( 'deleteConfirmFunc' ) ;
    //     DoctorActions.delete(this.state.selectedRowData);
    //     this.cleanSelected();
    // }

    // createCustomToolBar = props => {
    //     return (
    //         <div style={ { margin: '5px' , width : '100%'} }>
    //             <Button style={{ borderRadius:"5px", paddingLeft: "10px" , marginLeft: "15px" }} onClick={ () => this.editModal() }>新增</Button>
    //              &nbsp;&nbsp;
    //             <Button disabled = {this.state.editBtnDisabled} style={{ borderRadius:"5px", paddingLeft: "10px"  }} onClick={ () => this.editModal() }>編輯</Button>
    //              &nbsp;&nbsp;
    //              <Button disabled = {this.state.editBtnDisabled} style={{ borderRadius:"5px", paddingLeft: "10px" }} onClick={ () => this.confirmModal() }>刪除</Button>
    //              &nbsp;&nbsp;
    //             { props.components.btnGroup }
    //             &nbsp;&nbsp;
    //             <Button style={{ borderRadius:"5px", paddingLeft: "10px" }} onClick={ () => DoctorActions.load() }><i className='fa fa-refresh'/></Button>      
    //             <div  style={{ padding: "0 20px 0 0" , float: "right"}} >
    //                 { props.components.searchPanel }
    //             </div>
    //         </div>
    //     );
    // }

    notify() {
        //console.log('onNotify') ; 
        if( this.state.isloaded === false ) {
            if( this.state.loadResult === 'success') {
                toast.success("載入成功", {position: toast.POSITION.BOTTOM_RIGHT} );
                this.setState({ isloaded: true});
            }  
            if( this.state.loadResult === 'false') {
                toast.error("載入失敗", {position: toast.POSITION.BOTTOM_RIGHT} );
                this.setState({ isloaded: true});
            }  
            if( this.state.loadResult === 'deleteFalse') {
                toast.error("刪除失敗", {position: toast.POSITION.BOTTOM_RIGHT} );
                this.setState({ isloaded: true});
            }  
            if( this.state.loadResult === 'updateFalse') {
                toast.error("更新失敗", {position: toast.POSITION.BOTTOM_RIGHT} );
                this.setState({ isloaded: true});
            }  
        }
    }


    numFormatter( cell, row ) {
        console.log( 'cell '  +  cell); 
        var valTemp = cell ; 
        //var me = this ; 
        return (
                <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select" placeholder="cell" defaultValue={valTemp} onChange={ (value) => { console.log(value) /*() => me.handleTemplateChange(value) */ }  } >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </FormControl>
                </FormGroup>
                ) ;
    }

    handleTemplateChange ( row, value ) { 
        console.log(row) ; 
        console.log(value) ; 
    }


    render() {

        var me = this ;
        console.log(me.state.cart) ; 
        var options = {
                sizePerPageList: [ 30, 100 ],
				//onRowClick : this.handleRowClickEvent,
				exportCSVText : '輸出 CSV',
				//defaultSortName: this.props.defaultSortName,  // default sort column name
				//defaultSortOrder: this.props.defaultSortOrder,
                noDataText	: 'Loading',
                //pageStartIndex: 1,
                sizePerPage: 30,
                page: 1,
                //onSelect: this.handleRowSelectEvent,
                //toolBar: this.createCustomToolBar,
                searchPanel : this.renderCustomSearchPanel
                //searchField: this.createCustomSearchField
				//afterTableComplete: this.notify
            } ; 
        const selectRow = {
            mode: "radio",
            //bgColor: '#fefefe',
            bgColor: "rgb(203, 234, 247)",
            onSelect: this.handleRowSelect,
            hideSelectColumn: true,
            clickToSelect: true
        };
        
        if( this.state.isloaded === false && this.state.loadResult !== undefined ) {
            this.notify()
        }

        return (
            <div style={{ height: "100%", width: "100%", padding: "0px 20px 0px 20px" }}>
                <ToastContainer 
                    //position="top-right"
                    type="default"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop
                    closeOnClick={false}
                    pauseOnHover
                />
                <BootstrapTable data={me.state.cart} 
                                striped={false} 
                                bordered={ true }
                                hover={true} 
                                ref='bsTable'
                                selectRow={selectRow} 
                                //pagination={true} 
                                options={options}
                                //search
                                //exportCSV
                                csvFileName='table-export'
                                height={me.state.height}
                                //headerStyle={ { background: '#66CDAA' } }
                                >
                    <TableHeaderColumn dataField="productName" isKey={true} dataSort={true}>productName</TableHeaderColumn>
                    <TableHeaderColumn dataField="purchaseNum" dataFormat={ this.numFormatter } >purchaseNum</TableHeaderColumn>
                </BootstrapTable>

            </div>
        );
    }
};

export default PurchaseList;