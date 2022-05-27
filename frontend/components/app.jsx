import React from "react";
import { Route } from "react-router-dom"
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash";
import Modal from "./modal/modal";
import ListingModal from "./modal/listing_modal";
import NavHeaderContainer from "./header/nav_header_container";
import ListingsIndexContainer from "./listings/listings_index_container";
import SearchContainer from "./search/search_container";
import CreateListingFormContainer from "./listings/create_listing_form_container";
import UpdateListingFormContainer from "./listings/update_listing_form_container";
import SavedListingsContainer from "./listings/saved_listings_container";
import { Switch } from "react-router-dom";



const App = () => (
  <div>
      <Modal/>
      <ListingModal/>
      <header className="header">
          {/* <h1>spillow</h1> */}
          <NavHeaderContainer/>
      </header>

      <main className="main">
        <Switch>
          {/* <Route exact path="/listings" component={ListingsIndexContainer} /> */}
          <Route exact path="/listings" component={SearchContainer} />
          <Route exact path ="/listings/new" component={CreateListingFormContainer}/>
          <Route exact path ="/listings/:listingId/edit" component={UpdateListingFormContainer}/>
          <Route exact path="/listings/saves" component={SavedListingsContainer} />
          <Route path="/" component={Splash}/>

        </Switch>
      </main>
      {/* <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> */}
  </div>
);

export default App;