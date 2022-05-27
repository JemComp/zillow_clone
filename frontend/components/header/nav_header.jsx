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
                <NavLeft currentUser={this.props.currentUser} openModal={this.props.openModal}/>
                <Link to="/"><img src = { window.spillow }/></Link>
                <SignIn logout={this.props.logout} currentUser={this.props.currentUser} openModal={this.props.openModal}/>
            </div>
        )
    }
}

export default NavHeader