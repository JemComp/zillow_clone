import React from "react";
import { Route } from "react-router-dom"
import { AuthRoute } from "../util/route_util";
import Modal from "./modal/modal";
import NavHeaderContainer from "./header/nav_header_container";
import ListingsIndexContainer from "./listings/listings_index_container";
import SearchContainer from "./search/search_container";
import { Switch } from "react-router-dom";



const App = () => (
  <div>
      <Modal/>
      <header className="header">
          {/* <h1>spillow</h1> */}
          <NavHeaderContainer/>
      </header>

      <main className="main">
        <Switch>
          {/* <Route exact path="/listings" component={ListingsIndexContainer} /> */}
          <Route exact path="/listings" component={SearchContainer} />

        </Switch>
      </main>
      {/* <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> */}
  </div>
);

export default App;