import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./SearchBar.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SearchBar(props) {

   const handleKeyPress=(e)=>{
        if(e.charCode==13){
            e.preventDefault();
            props.handlePress();   
        } 
      }
      const handleMousePress=(e)=>{
          props.handlePress();
      }
  return (
    <div className="SearchBar">
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Search here" onChange={e => props.handleInput(e)} onKeyPress={e=>{handleKeyPress(e)}}/>
          </Col>
          <Col>
            <Button variant="dark" type="button" onClick={e => handleMousePress(e)}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchBar;
