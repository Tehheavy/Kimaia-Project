import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ReactDom from "react-dom";
import Auth from "../../../Auth";
import Toast from "react-bootstrap/Toast";
import { Redirect } from "react-router-dom";

function Dataform(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


    return (
      <div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={e => props.handleChangeEmail(e)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={e => props.handleChangePassword(e)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={e => props.handleClick(e)}
              >
                {props.formType}
              </button>

      </div>
    );
}

export default Dataform;
