import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login, signup, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import React from "react";
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        currentUser: state.entities.users[state.session.id]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <span onClick={() => dispatch(openModal('login'))} className="signup-switch-other">
              Sign in
            </span>
            ),
          openModal: (modalType) => dispatch(openModal(modalType)),
          closeModal: () => dispatch(closeModal()),
          clearErrors: () => dispatch(clearErrors())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));