import React from "react";
import { NavLeft } from "./nav_left";
import SignIn from "./sign_in";

class NavHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="nav-header">
                <NavLeft/>
                <img src = { window.houseIcon }/>
                <SignIn logout={this.props.logout} currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default NavHeader