import React from 'react';
import Reflux from 'reflux';
import DoctorStore from '../../stores/DoctorStore'; 
import DoctorActions from '../../actions/DoctorActions'; 
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import EditDoctorModal from '../component/EditDoctorModal'
import ConfirmModal from '../component/ConfirmModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class DoctorList extends Reflux.Component{
    constructor(props)
    {
        super(props);
        this.state = {  editBtnDisabled: true , 
                        isloaded: false, loadResult: undefined /*, selectedRowData: undefined*/}; 
        this.store = DoctorStore; 
        this.handleRowSelect = this.handleRowSelect.bind(this) ; 
        this.deleteConfirmFunc = this.deleteConfirmFunc.bind(this) ;
        this.cleanSelected = this.cleanSelected.bind(this) ;
        //this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        this.notify = this.notify.bind(this);
    }

    componentDidMount() {
        DoctorActions.load();
        //this.updateWindowDimensions();
        //window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        //window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
    // updateWindowDimensions() {
    //     this.setState({ width: window.innerWidth, height: window.innerHeight - 260});
    // }

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
    
    deleteConfirmFunc() {
        console.log( 'deleteConfirmFunc' ) ;
        DoctorActions.delete(this.state.selectedRowData);
        this.cleanSelected();
    }

    picFormatter( cell, row ) {
        var srcImg = "img/" + cell ; 
        return (< img className = "img-rounded" src = {srcImg} alt = "" />) ;
    }

    createCustomToolBar = props => {
        return (
            <div style={ { margin: '5px' , width : '100%'} }>
                <Button style={{ borderRadius:"5px", paddingLeft: "10px" , marginLeft: "15px" }} onClick={ () => this.editModal() }>新增</Button>
                 &nbsp;&nbsp;
                <Button disabled = {this.state.editBtnDisabled} style={{ borderRadius:"5px", paddingLeft: "10px"  }} onClick={ () => this.editModal() }>編輯</Button>
                 &nbsp;&nbsp;
                 <Button disabled = {this.state.editBtnDisabled} style={{ borderRadius:"5px", paddingLeft: "10px" }} onClick={ () => this.confirmModal() }>刪除</Button>
                 &nbsp;&nbsp;
                { props.components.btnGroup }
                &nbsp;&nbsp;
                <Button style={{ borderRadius:"5px", paddingLeft: "10px" }} onClick={ () => DoctorActions.load() }><i className='fa fa-refresh'/></Button>      
                <div  style={{ padding: "0 20px 0 0" , float: "right"}} >
                    { props.components.searchPanel }
                </div>
            </div>
        );
    }

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

    render() {

        var me = this ;
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
                toolBar: this.createCustomToolBar,
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
                <BootstrapTable data={me.state.data} 
                                striped={false} 
                                bordered={ true }
                                hover={true} 
                                ref='bsTable'
                                selectRow={selectRow} 
                                pagination={true} 
                                options={options}
                                search
                                exportCSV
                                csvFileName='table-export'
                                height={me.state.height}
                                headerStyle={ { background: '#66CDAA' } }
                                >
                    <TableHeaderColumn dataField="userId" isKey={true} /*dataAlign="center"*/ dataSort={true}>userId</TableHeaderColumn>
                    <TableHeaderColumn dataField="username">username</TableHeaderColumn>
                    <TableHeaderColumn dataField="email">email</TableHeaderColumn>
                    <TableHeaderColumn dataField="phone">phone</TableHeaderColumn>
                    <TableHeaderColumn dataField="status">status</TableHeaderColumn>
                    <TableHeaderColumn dataField="pic" dataFormat={ this.picFormatter }>image</TableHeaderColumn>
                    <TableHeaderColumn dataField="createDate" hidden={true}>createDate</TableHeaderColumn>
                </BootstrapTable>
                <EditDoctorModal ref = "refEditDoctorModal" {...this.props} selectedRowData = {me.state.selectedRowData}/> 
                <ConfirmModal ref = "refConfirmModal" {...this.props} selectedRowData = {me.state.selectedRowData}/>
            </div>
        );
    }
};

export default DoctorList;