import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signup } from "../../actions/session_actions";
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
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
              Login
            </button>
          ),
          closeModal: () => dispatch(closeModal())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));