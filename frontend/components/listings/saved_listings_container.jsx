import { connect } from 'react-redux';
import { fetchAllListings } from '../../actions/listing_actions';
import { withRouter, Link } from 'react-router-dom';
import {openModal, closeModal} from '../../actions/listing_modal_actions'
// import ListingsIndex from './listings_index';
import SavedListings from './saved_listings';

const filterSaves = (state) => {
    let savedListingsObjects = []
    const saveObjects = Object.values(state.entities.saves)
    const savedListingIds = saveObjects.map(save => save.listing_id)
    savedListingIds.forEach(listingId => {
        savedListingsObjects.push(state.entities.listings[listingId])
    })

    return savedListingsObjects
}

const mSTP = (state, ownProps) => {
    return({
        saves: state.entities.saves,
        listings: filterSaves(state)
    })
};


const mDTP = dispatch => ({
    openListingModal: (listingId) => dispatch(openModal(listingId))
    
});

export default withRouter(connect(mSTP, mDTP)(SavedListings));