import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListingForm from './listing_form';
import { createListing } from '../../actions/listing_actions';

const mapStateToProps = state => ({
  listing: {
    address: '',
    zip_code: 0,
    city: '',
    state: '',
    lat: 37.7749,
    lng: -122.4194,
    beds: 0,
    baths: 0,
    sqft: 0,
    price: 0,
    desciption: ''
  },
  formType: 'Create Listing',
  errors: state.errors.listing,

});

const mapDispatchToProps = dispatch => ({
  action: listing => dispatch(createListing(listing))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingForm));