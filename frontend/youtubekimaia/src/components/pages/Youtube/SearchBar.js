import React, { useState } from "react";
import axios from "axios";

function SearchBar(props) {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control type="text"/>
          <Form.Text className="text-muted">
            Search for your videos here
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SearchBar;
