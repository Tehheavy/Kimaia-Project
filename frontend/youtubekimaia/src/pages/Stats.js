import React, { useState,useEffect  } from "react";
import { MDBDataTable } from 'mdbreact';
import ApiCalls from '../ApiCalls'
import axios from 'axios';
import Navbar from '../components/navbar'


function Stats(props) {
  const [logs, setLogs] = useState([]);// Search bar value
  const [data,setData]=useState([])
   
    useEffect(() => {
      async function fetchData() {
        // You can await here
        const response = await axios.get('/log')
        const data = {
      columns: [
        {
          label: 'Email',
          field: 'email',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Action',
          field: 'action',
          sort: 'asc',
          width: 270
        },
        {
          label: 'searchTitle',
          field: 'searchTitle',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Video',
          field: 'video',
          sort: 'asc',
          width: 100
        },
        {
          label: 'videoTime',
          field: 'videoTime',
          sort: 'asc',
          width: 150
        },
        {
          label: 'time',
          field: 'time',
          sort: 'asc',
          width: 100
        }
      ],
      rows: response.data.data
    };
    setData(data)
      }
      fetchData();
    }, []); // Or [] if effect doesn't need props or state
  return (
    <div>
        <Navbar type={"admin"}></Navbar>
      <MDBDataTable
        striped
        bordered
        small
        data={data}
      />
    </div>
  );
}

export default Stats;

