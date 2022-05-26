import React from 'react';
import { closeModal } from '../../actions/listing_modal_actions';
import { createSave, deleteSave } from '../../actions/save_actions';
import { connect } from 'react-redux';
import ListingShow from '../listings/listing_show';

function ListingModal({currentUser, listing, closeModal, createSave, deleteSave, saves}) {
  if (!listing) {
    return null;
  }
  
  let component;
  component = (listing ? <ListingShow
    listing={listing} 
    currentUser={currentUser} 
    closeModal={closeModal}
    saves={saves} 
    createSave={createSave} 
    deleteSave={deleteSave}/> : null);
    
  return (
    <div className="listing-modal-background" onClick={closeModal}>
      <div className="listing-modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    listing: state.entities.listings[state.ui.listingModal],
    currentUser: (state.session) ? state.entities.users[state.session] : null,
    saves: state.entities.saves

  }; 
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createSave: (save) => dispatch(createSave(save)),
    deleteSave: (saveId) => dispatch(deleteSave(saveId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingModal);