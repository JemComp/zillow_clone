import React from "react";
import { Link } from "react-router-dom";
// import { openModal, closeModal } from '../../actions/modal_actions';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    
    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    loggedIn()  {
        return (
            <div className="signin-div">
                <p>{ this.props.currentUser.email }</p>
                <div className="logged-in-menu">
                    <Link to="listings/saves">saved listings</Link>
                    <p onClick={this.handleLogout}>Logout</p>
                </div>
            </div>
    )}

    loggedOut() {
        return (
            <div className="signin-div">
                <p onClick={() => this.props.openModal('login')}>
                Sign In
                </p>
            </div>
    )}


    render() {

        return this.props.currentUser ? this.loggedIn() : this.loggedOut();
    }
}

export default SignIn;