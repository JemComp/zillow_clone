
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavHeader from "./nav_header";
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: (modal)=>  dispatch(openModal(modal))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);