import React from 'react';
import { closeModal } from '../../actions/listing_modal_actions';
import { connect } from 'react-redux';
import ListingShow from '../listings/listing_show';

function Modal({listingId, closeModal}) {
  if (!listingId) {
    return null;
  }
  
  let component;
  component = (listingId ? <ListingShow key={listingId}/> : null);
  return (
    <div className="listing-modal-background" onClick={closeModal}>
      <div className="listing-modal-child" onClick={e => e.stopPropagation()}>
        { component }modal
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.listingId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);