import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import DataForm from "./DataForm";
import Auth from "../../../Auth";
import Toast from "react-bootstrap/Toast";
import { Redirect } from "react-router-dom";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [callBack, setCallBack] = useState([false, false]);

  const handleChangeEmail = event => {
    console.log(email);
    setEmail(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };
  const handleClickLogin = event => {
    event.preventDefault();
    let data = { email, password };
    console.log(data);
    Auth.login(data, setCallBack);
  };
  if (callBack[0] === false) {
    return (
      <Container>
        <Col>
          <Toast
            show={callBack[1]}
            onClose={() => setCallBack([false, false])}
            show={callBack[1]}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
            </Toast.Header>
            <Toast.Body>{"Error Logging up"}</Toast.Body>
          </Toast>
          <h3>Sign Up</h3>
          <form>
            <DataForm
              handleClick={handleClickLogin}
              handleChangePassword={handleChangePassword}
              handleChangeEmail={handleChangeEmail}
              formType={"Login"}
            ></DataForm>
            <p className="forgot-password text-right">
              <a href="/signup">Sign up</a>
            </p>
          </form>
        </Col>
      </Container>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default LoginForm;
