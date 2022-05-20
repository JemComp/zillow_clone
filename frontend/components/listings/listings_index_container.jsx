import { connect } from 'react-redux';
import { fetchAllListings } from '../../actions/listing_actions';
import { withRouter, Link } from 'react-router-dom';
import ListingsIndex from './listings_index';

const mSTP = (state, ownProps) => {
    return({
        listings: state.entities.listings
    })
};


const mDTP = dispatch => ({
    fetchAllListings: () => dispatch(fetchAllListings()),
});

export default withRouter(connect(mSTP, mDTP)(ListingsIndex));