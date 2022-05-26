import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import * as SessionApiUtil from "./util/session_api_util"
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {[window.currentUser.user.id]: window.currentUser.user},
                listings: window.currentUser.listings,
                saves: window.currentUser.saves
            },
            session: {
                id: window.currentUser.user.id
            }
        }
    }


  const  store = configureStore(preloadedState);
  window.store = store
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = SessionApiUtil.login
  ReactDOM.render(<Root store={store}/>, root);
});