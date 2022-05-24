import * as ListingAPIUtil from "../util/listing_util"

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS"
export const RECEIVE_LISTING = "RECEIVE_LISTING"
export const REMOVE_LISTING = "REMOVING_LISTING"
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS"


const receiveErrors = (errors) => {
  return {
      type: RECEIVE_LISTING_ERRORS,
      errors
  }
}
const receiveAllListings = listings => ({
    type: RECEIVE_ALL_LISTINGS,
    listings
  });
  
  const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
  });
  
  const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
  });

  export const fetchAllListings = () => dispatch => (
    ListingAPIUtil.fetchListings()
      .then(listings => dispatch(receiveAllListings(listings)))
  );

  export const fetchListing = (listingId) => dispatch => (
    ListingAPIUtil.fetchListing(listingId)
      .then(listing => dispatch(receiveListing(listing)))
  );


export const createListing = (listing) => dispatch => {
    return ListingAPIUtil.createListing(listing)
        .then(listing => dispatch(receiveListing(listing)))
        .fail(error => dispatch(receiveErrors(error)))
}

export const updateListing = (listing) => dispatch => {
    return ListingAPIUtil.updateListing(listing)
        .then(listing => dispatch(receiveListing(listing)))
        .fail(error => dispatch(receiveErrors(error)))
}

export const deleteListing = (listingId) => dispatch => {
    return ListingAPIUtil.deleteListing(listingId)
        .then(listingId => dispatch(removeListing(listingId)))
}