import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListingForm from './listing_form';
import { fetchListing, updateListing, deleteListing,clearErrors} from '../../actions/listing_actions';


class UpdateListingForm extends React.Component {
    componentDidMount() {
      this.props.fetchlisting(this.props.match.params.listingId);
    }
  
    render() {
      const { action, formType, listing, errors, deleteListing, history, clearErrors } = this.props;

      if (!listing) return null;
      return (
        <ListingForm
          action={action}
          formType={formType}
          listing={listing} 
          errors={errors}
          history={history}
          deleteListing={deleteListing}  
          clearErrors={clearErrors}  />
      );
    }
  }
  
  const mapStateToProps = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.listingId],
    formType: 'Update listing',
    errors: state.errors.listing,

  });
  
  const mapDispatchToProps = dispatch => ({
    fetchlisting: listingId => dispatch(fetchListing(listingId)),
    action: listing => dispatch(updateListing(listing)),
    deleteListing: listingId => dispatch(deleteListing(listingId)),
    clearErrors: () => dispatch(clearErrors())
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateListingForm));