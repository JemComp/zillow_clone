import React from "react";
import { Link } from "react-router-dom";
import { openModal, closeModal } from '../../actions/modal_actions';


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
            <div>
                <p>Hello { this.props.currentUser.email }</p>
                <p onClick={this.handleLogout}>Logout</p>
            </div>
    )}

    loggedOut() {
        return (
            <div>
                <p onClick={() => dispatch(openModal('signup'))}>
                Sign up
                </p>
            </div>
    )}


    render() {

        return this.props.currentUser ? this.loggedIn() : this.loggedOut();
    }
}

export default SignIn;