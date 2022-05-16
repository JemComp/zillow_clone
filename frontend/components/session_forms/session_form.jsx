
  
import React from "react";
import { Link } from "react-router-dom";
import { openModal, closeModal } from '../../actions/modal_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        if (this.props.errors.length === 0) {
            dispatch(closeModal()) 
        }
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
                <h2>{this.props.formType === "login" ? "Log in" : "Sign up"}</h2>



                <form onSubmit={this.handleSubmit} className="session-form">
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleChange("email")}/>
                    </label>

                    <br/>
                    
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
                    </label>

                    <br/>

                    <button>{this.props.formType === "login" ? "Log in!" : "Sign up!"}</button>
                
                </form>
                <ul>
                    {this.props.errors.map((error, index) => {
                        return <li key={index}>{error}</li>
                    })}
                    <br/>
                </ul>

                <button >
                {"Log in demo user"}
                </button>

                <button onClick={() => dispatch(openModal(this.props.formType === "login" ? "signup" : "login"))}>
                {this.props.formType === "login" ? "Sign up instead" : "Log In instead"}
                </button>
            </div>
        );  
    }
}

export default SessionForm;