
  
import React from "react";
import { Link } from "react-router-dom";
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

    
    render() {
        // if(this.props.currentUser) {
        //     this.props.history.push('/');
        //     return;
        // }
        return (
            <div className="session-form-container">
                <h1 id="session-welcome">Welcome to Spillow</h1>
                <h2>{this.props.formType === "login" ? "Log in" : "Sign up"}</h2>



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

                {this.props.otherForm}
            </div>
        );  
    }
}

export default SessionForm;