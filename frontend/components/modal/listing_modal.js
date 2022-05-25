import React from 'react';
import { closeModal } from '../../actions/listing_modal_actions';
import { connect } from 'react-redux';
import ListingShow from '../listings/listing_show';

function ListingModal({listing, closeModal}) {
  if (!listing) {
    return null;
  }
  
  let component;
  component = (listing ? <ListingShow listing={listing} currentUser={currentUser} closeModal={closeModal}/> : null);
  return (
    <div className="listing-modal-background" onClick={closeModal}>
      <div className="listing-modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    listing: state.entities.listings[state.ui.listingModal],
    currentUser: state.entities.users[state.session]
  }; 
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingModal);