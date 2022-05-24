import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListingForm from './listing_form';
import { createListing } from '../../actions/listing_actions';

const mapStateToProps = state => ({
  listing: {
    address: '',
    zip_code: '',
    city: '',
    state: '',
    lat: '',
    lng: '',
    beds: '',
    baths: '',
    sqft: '',
    price: '',
    desciption: ''
  },
  formType: 'Create Listing',
  errors: state.errors.listing,

});

const mapDispatchToProps = dispatch => ({
  action: listing => dispatch(createListing(listing))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);