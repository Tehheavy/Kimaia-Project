import React, { useState,useEffect  } from "react";
import { MDBDataTable } from 'mdbreact';
import ApiCalls from '../ApiCalls'
import axios from 'axios';
import Navbar from '../components/navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Stats(props) {
  const [logs, setLogs] = useState([]);// Search bar value
  const [data,setData]=useState([])
   
    useEffect(() => {
      async function fetchData() {
        // You can await here
        const response = await axios.get('/log')
        const temp=response.data.data.map(x=>{
          const newDate=new Date(x.time);
          x.time=newDate.toLocaleDateString()+" "+newDate.toLocaleTimeString()
          return x;
        })
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
      rows: temp
    };
    setData(data)
      }
      fetchData();
    }, []); // Or [] if effect doesn't need props or state
  return (
    <div>
        <Navbar type={"admin"}></Navbar>
      <Container style={{maxWidth:"90%"}}>
      <MDBDataTable
        striped
        bordered
        small
        data={data}
      />
      </Container>
    </div>
  );
}

export default Stats;

