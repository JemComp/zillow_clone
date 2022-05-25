import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListingForm from './listing_form';
import { fetchListing, updateListing} from '../../actions/listing_actions';


class UpdateListingForm extends React.Component {
    componentDidMount() {
      this.props.fetchlisting(this.props.match.params.listingId);
    }
  
    render() {
      const { action, formType, listing, errors } = this.props;

      if (!listing) return null;
      return (
        <ListingForm
          action={action}
          formType={formType}
          listing={listing} 
          errors={errors}
          history={this.props.history}
           />
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
    action: listing => dispatch(updateListing(listing))
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateListingForm));