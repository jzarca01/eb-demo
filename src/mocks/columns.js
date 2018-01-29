import React from 'react';

import Moment from 'react-moment';
import 'moment/locale/fr';


const columns = [{
    columns: [
        {
            Header: "",
            id:"Edit button",
            Cell: data => (
                <button>Edit</button>
            )
        },
        {
            Header: "Name",
            accessor: "name",
            type:"text"
        },
        {
            Header: "Age",
            accessor: "age",
            type:"text"
        },
        {
            Header: "Created On",
            id: "createdAt",
            accessor: "createdAt",
            Cell: data => (
                <Moment format="YYYY/MM/DD">
                    {data.value}
                </Moment>
            ),
            type:"date"
        },
        {
            Header: "Percent",
            accessor: "score",
            Cell: data => (
                <span>{data.value ? data.value * 100 : 0} %</span>
            ),
            type:"number"
        },
        {
            Header: "Sex",
            accessor: "sex",
            type:"bool"
        }
    ]
}];

export default columns;