import React, { Component } from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";
import ModalTest from '../modal-form';

import columns from '../../mocks/columns';
import data from '../../mocks/data';

export default class TableView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: [],
            loading: true,
            isModalOpen: false,
            rowInfo: {}
        };

        this.toggleLoading = this.toggleLoading.bind(this);
        this.getData = this.getData.bind(this);
        this.openModalWithInfo = this.openModalWithInfo.bind(this);
        this.updateRow = this.updateRow.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    toggleLoading() {
        this.setState({loading: !this.state.loading});
    }

    getData() {
        const that = this;
        return new Promise(function(resolve) {
            setTimeout(function() {
                that.setState({columns: columns, data: data});
                that.toggleLoading();
            }, 2000);
        });
    }

    openModalWithInfo(columnsInfo, rowInfo) {
        this.setState({isModalOpen: true, rowInfo : rowInfo, columnsInfo: columnsInfo});
    }

    updateRow(updatedRow) {
        console.log("row", updatedRow);
        const newData = this.state.data.slice(0, {...updatedRow})
            .concat([{
            ...updatedRow
            }])
            .concat(this.state.data.slice(updatedRow.id + 1));

        this.setState({data: newData});
    }
      
    render() {
        const { columns, data, loading } = this.state;
        const that = this;
        return (
            <div>
                <ReactTable
                    ref= {(reactTable) => {
                        this.reactTable = reactTable
                    }}
                    data={data}
                    columns={columns ? columns : []}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    loading={loading} // Display the loading overlay when we need it
                    onFetchData={this.getData}
                    style={{maxWidth:"90%"}}
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                if(column.id === "Edit button") {
                                    const columns = state.columns[0].columns;
                                    that.openModalWithInfo(columns, rowInfo.original);
                                }
                            }
                        }
                      }}
                >
                </ReactTable>
                <ModalTest modalIsOpen={this.state.isModalOpen} data={this.state.rowInfo} columnsInfo={this.state.columnsInfo} updateRow={this.updateRow}/>
            </div>
        );
    }
};
