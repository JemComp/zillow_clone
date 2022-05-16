// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { login } from "../../actions/session_actions";
// import SessionForm from "./session_form";

// const mapStateToProps = (state, ownProps) => {
//     return {
//         errors: state.errors.session,
//         formType: 'login',
//         currentUser: state.entities.users[state.session.id]
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         processForm: (user) => dispatch(login(user))
//     };
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));


import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'login',
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);