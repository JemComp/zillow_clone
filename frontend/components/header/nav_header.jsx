import React from "react";
import { Link } from "react-router-dom"
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
                <Link to="/"><img src = { window.houseIcon }/></Link>
                <SignIn logout={this.props.logout} currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default NavHeader