import React from 'react';
import Reflux from 'reflux';

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import ReactTable from "react-table";
import "react-table/react-table.css";

class Schedule extends Reflux.Component{

    constructor() {
        super();
        this.state = {
          data: [{
            time: '上午 09:00-12:00',
            mon: '<div>Tanner</div><div>1111</div>',
            tue: 'tue',
            wed: 'wed',
            thu: 'thu',
            fri: 'fri',
            sat: 'sat'
          },{
            time: '下午 14:30-17:30',
            mon: 'Tanner',
            tue: 'tue',
            wed: 'wed',
            thu: 'thu',
            fri: 'fri',
            sat: 'sat'
          },{
            time: '晚上 18:00-21:00',
            mon: 'Tanner',
            tue: 'tue',
            wed: 'wed',
            thu: 'thu',
            fri: 'fri',
            sat: 'sat'
          }]
        };
        this.renderEditable = this.renderEditable.bind(this);
        //this.makeData = thismakeData.bind(this) ;
      }

    renderEditable(cellInfo) {
        console.log('cellInfo') ;
        console.log(cellInfo);
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              const data = [...this.state.data];
              data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ data });
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.data[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
    }

    render() {
        const { data } = this.state;
        console.log(data) ;
        return (
          <div style={{ height: "100%", width: "100%", padding: "0px 20px 0px 20px" }}>
            <ReactTable
              data={data}
              columns={[
                {
                    Header: "時間",
                    accessor: "time",
                    Cell: this.renderEditable
                }
                ,
                {
                  Header: "週一",
                  accessor: "mon",
                  Cell: this.renderEditable
                },
                {
                  Header: "週二",
                  accessor: "tue",
                  Cell: this.renderEditable
                }
                ,
                {
                  Header: "週三",
                  accessor: "wed",
                  Cell: this.renderEditable
                },
                {
                  Header: "週四",
                  accessor: "thu",
                  Cell: this.renderEditable
                },
                {
                  Header: "週五",
                  accessor: "fri",
                  Cell: this.renderEditable
                },
                {
                  Header: "週六",
                  accessor: "sat",
                  Cell: this.renderEditable
                }
                // {
                //   Header: "Full Name",
                //   id: "full",
                //   accessor: d =>
                //     <div
                //       dangerouslySetInnerHTML={{
                //         __html: d.firstName + " " + d.lastName
                //       }}
                //     />
                // }
              ]}
              defaultPageSize={3}
              className="-striped -highlight"
            />
            <br />
            {/* <Tips />
            <Logo /> */}
          </div>
        );
      }
};

export default Schedule;