
  
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import { login } from "../../util/session_api_util";
//refactor to pass in open/close modal

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this)
        console.log(props)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    demoLogin() {
        const demoUser = {
            email: 'demo@login.com',
            password: '123456'
        }
        this.props.login(demoUser)
            .then(() => this.props.closeModal())
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.closeModal())
        
    }

    handleChange(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            });
        }
    }

    signupSwitch() {
        let signupSwitch;

        if (this.props.formType === 'login') {
            signupSwitch = (
                <div className="session-form-switch">
                    <span className="signup-switch">Sign in</span>
                    {this.props.otherForm}
                </div>
            )
        } else {
            console.log("signup")
            signupSwitch = (
            <div className="session-form-switch">
                {this.props.otherForm}
                <span className="signup-switch">New account</span>
            </div>
            )  
        }

        return signupSwitch;
    }

    
    render() {

        return (
            <div className="session-form-container">
                <h1 id="session-welcome">Welcome to Spillow</h1>
                {/* <h2>{this.props.formType === "login" ? "Log in" : "Sign up"}</h2> */}
                {this.signupSwitch()}
            
                <form onSubmit={this.handleSubmit} className="session-form">

                    <div id="session-input">
                        <label>Email </label>
                        <br/>
                        <input type="text" placeholder="Enter email" value={this.state.email} onChange={this.handleChange("email")}/>
                    </div>

                    <br/>
                    <div id="session-input">
                        <label>Password </label>
                        <br/>
                        <input type="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange("password")} />
                    </div>

                    <br/>
                <ul>
                    {this.props.errors.map((error, index) => {
                        return <li key={index}>{error}</li>
                    })}
                    <br/>
                </ul>

                    <button id="session-submit">{this.props.formType === "login" ? "Log in" : "Submit"}</button>
                
                </form>

                <button onClick={this.demoLogin} id="switch-login">
                {"Log in demo user"}
                </button>
            </div>
        );  
    }
}

export default SessionForm;