import React from "react";
import { Route } from "react-router-dom"
import SignInContainer from "./header/sign_in_container";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import { AuthRoute } from "../util/route_util";
import Modal from "./modal/modal";
import NavHeaderContainer from "./header/nav_header_container";



const App = () => (
  <div>
      <Modal/>
      <header className="header">
          {/* <h1>spillow</h1> */}
          <NavHeaderContainer/>
      </header>
      {/* <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> */}
  </div>
);

export default App;