// import { connect } from 'react-redux';
// import { fetchListing } from '../../actions/listing_actions';
// import { createSave } from '../../actions/save_actions';
// import ListingShow from './listing_show';
// import { withRouter } from 'react-router-dom';

// const mSTP = (state, ownProps) => {
//     console.log(state)
//     return({
//         listing: state.entities.listings[ownProps.match.params.listingId]
//     })
// };


// const mDTP = dispatch => ({
//     // fetchListing: listingId => dispatch(fetchListing(listingId)),
//     createSave: save => dispatch(createSave(save))
// });

// export default withRouter(connect(mSTP, mDTP)(ListingShow));