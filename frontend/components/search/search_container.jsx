import { connect } from 'react-redux';
import { fetchAllListings } from '../../actions/listing_actions';
import { withRouter, Link } from 'react-router-dom';
import {openModal, closeModal} from '../../actions/listing_modal_actions'
// import ListingsIndex from './listings_index';
import Search from './search'

const mSTP = (state, ownProps) => {
    return({
        listings: state.entities.listings
    })
};


const mDTP = dispatch => ({
    fetchAllListings: () => dispatch(fetchAllListings()),
    openListingModal: (listingId) => dispatch(openModal(listingId))
    
});

export default withRouter(connect(mSTP, mDTP)(Search));