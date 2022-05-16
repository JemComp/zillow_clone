
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import SignIn from "./sign_in";

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);